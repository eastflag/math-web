import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-view',
  templateUrl: './exam-view.component.html',
  styleUrls: ['./exam-view.component.scss']
})
export class ExamViewComponent implements OnInit {
  folders = [
    {
      no: 1,
      text: "나의 자녀는 자신의 생각보다 더 좋은 생각이나 아이디어가 있는 친구를 따라 한 적이 있다.",
    },
    {
      no: 2,
      text: "나의 자녀는 무엇을 하든 먼저 계획을 세운다.",
    },
    {
      no: 3,
      text: "나의 자녀는 하고 싶은 일은 꼭 한다.",
    },
    {
      no: 4,
      text: "나의 자녀는 \"만약~ 라면 어떻게 될까?\" 라는 질문을 많이 한다.",
    },
    {
      no: 5,
      text: "나의 자녀는 모르는 문제가 있으면 그 문제를 풀려고 노력한다.",
    },
    {
      no: 6,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 7,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 8,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 9,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 10,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 11,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 12,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    },
    {
      no: 13,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.\n이야기의 주인공이 되고 싶다는 말을 종종 한다.)",
    },
    {
      no: 14,
      text: "나의 자녀는 이 세상에 꼭 필요한 사람이라고 말하거나 생각하곤 한다.",
    }
  ];

  favoriteSeason: string;

  seasons = [
    '전혀 그렇지 않다',
    '그렇지 않다',
    '보통이다',
    '그렇다',
    '매우 그렇다',
  ];

  constructor() { }

  ngOnInit() {
  }

}
