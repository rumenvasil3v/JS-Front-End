function solve(appointmentsArray) {
    const scheduledAppointment = 'Scheduled for ';
    const alreadyScheduledAppointment = 'Conflict on ';
    
    const appointments = {};

    for (const appointment of appointmentsArray) {
        const appointmentArray = appointment.split(' ');

        const [appointmentWeekday, appointmentPerson] = appointmentArray;

        if (!(appointments.hasOwnProperty(appointmentWeekday))) {
            appointments[appointmentWeekday] = appointmentPerson;

            console.log(`${scheduledAppointment}${appointmentWeekday}`);
        } else {
            console.log(`${alreadyScheduledAppointment}${appointmentWeekday}!`);
        }
    }

    const printAppointments = appointments => {
        for (const key in appointments) {
            console.log(`${key} -> ${appointments[key]}`);
        }
    }

    printAppointments(appointments);
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);