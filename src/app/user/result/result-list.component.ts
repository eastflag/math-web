import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {UserService} from "../../user.service";
import {ResultVO} from "../../domain/result.vo";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {TestInfoVo} from "../../domain/test-info.vo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:  [
    trigger('flyInOut', [
      state('In', style({transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translate(100%, 0)', opacity: '0'}))
      ])
    ])
  ]
})
export class ResultListComponent implements OnInit {
  newTestInfo = new TestInfoVo();
  testInfoList = new Array<TestInfoVo>();

  // 저정할 데이터
  tempMap = new Map<number, TestInfoVo>();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getTodoList();
  }

  // addTestInfo() {
  //   console.log('click');
  //   this.userService.addTodo(this.newTestInfo)
  //     .then((data: TestInfoVo) => {
  //       this.testInfoList.unshift(data);
  //       this.newTestInfo.todo = null;
  //     });
  // }

  getTodoList() {
    this.userService.getTodoList()
      .then((data: Array<TestInfoVo>) => {
        console.log(data);
        this.testInfoList = data;
      });
  }

  // 수정하는 템플릿으로 변경
  // save(item: TestInfoVo) {
  //   item.isEdited = true;
  //   // 기존값을 저장
  //   const newTemp = new TestInfoVo();
  //   newTemp.todo = item.todo;
  //   newTemp.isFinished = item.isFinished;
  //   this.tempMap.set(item.todo_id, newTemp);
  // }

  remove(item: TestInfoVo) {
    const result = window.confirm("삭제하시겠습니까?");
    if (result) {
      // 서버에 삭제요청을 하고 성공하면 arraylist에서 제거
      this.userService.removeTodo(item.todo_id)
        .then((data: ResultVO) => {
          if (data.result === 0) {
            // 목록에서 제거
            const index = this.testInfoList.findIndex(value => value.todo_id === item.todo_id);
            this.testInfoList.splice(index, 1);
          }
        });
    }
  }

  // modify(item: TestInfoVo) {
  //   // 서버에 수정요청하고 성공시 원 템플릿으로 복원
  //   this.userService.modifyTodo(item)
  //     .then((data: TestInfoVo) => {
  //       item.isFinished = data.isFinished;
  //       item.todo = data.todo;
  //       item.updated = data.updated;
  //       item.isEdited = false;
  //     });
  // }

  // restore(item: TestInfoVo) {
  //   item.isEdited = false;
  //   // 기존값을 복원
  //   item.todo =  this.tempMap.get(item.todo_id).todo;
  //   item.isFinished = this.tempMap.get(item.todo_id).isFinished;
  // }

  gotoAnswerView(testInfo: TestInfoVo) {
    this.router.navigateByUrl(`/view/answer/${testInfo.todo_id}`);
  }

  gotoResultView(testInfo: TestInfoVo) {
    this.router.navigateByUrl(`/view/result/${testInfo.todo_id}`);
  }
}
