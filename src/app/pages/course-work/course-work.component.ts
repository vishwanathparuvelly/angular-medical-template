import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-work',
  templateUrl: './course-work.component.html',
  styleUrls: ['./course-work.component.css']
})
export class CourseWorkComponent implements OnInit {
  listOfData = [
    {
      patientAccountNumber:'1',
      key: '1',
      PatientName: 'Benjamin Button',
      Completed: 16,
      currentCcourse: 'Braving anxiety'
    },
   
  ];
  constructor() { }

  ngOnInit() {
    const courses = [
      'Braving anxiety',
      'Building self-esteem',
      'Improving sleep',
      'Managing depression',
      'Overcoming social anxiety'
    ];
    for (let i = 0; i < 10; i++) {
      this.listOfData.push({
        patientAccountNumber:(Math.random()*100).toFixed(0), // 3-digit account number
        key: i.toString(),
        PatientName: `Patient ${i + 1}`, // Basic naming for demonstration
        Completed: Math.floor(Math.random() * 100), // Random completion percentage
        currentCcourse: courses[Math.floor(Math.random() * courses.length)]
      });
    }
  }

}
