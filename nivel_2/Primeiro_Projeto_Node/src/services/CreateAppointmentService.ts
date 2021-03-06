/**
 * Recebimento das informações
 * Tratativa de erros/excessoes
 * Acesso ao repositorio
 */
import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment'
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository : AppointmentsRepository;

  constructor(appointmentsRepository : AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date } : RequestDTO) : Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appointmentsRepository.findByDate(appointmentDate);

    if(findAppointmentInSameDate) {
      throw Error("This appointment is alreay hour");
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate
    });

    return appointment;
  }
}

export default CreateAppointmentService;
