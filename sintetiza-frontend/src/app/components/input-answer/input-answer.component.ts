import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { IQuestion } from '../../interfaces/question.interface';
import { SintetizeService } from '../../services/sintetize.service';
import { IAnswer } from '../../interfaces/answer.interface';

@Component({
  selector: 'app-input-answer',
  imports: [ ReactiveFormsModule ],
  templateUrl: './input-answer.component.html',
  styleUrl: './input-answer.component.css'
})
export class InputAnswerComponent {

  @Input() question: IQuestion = {
    id: '',
    description: '',
    dateTime: new Date(),
    anwers: []
  };

  public word: FormControl = new FormControl('');
  public words: string[] = [];
  public limitWord: boolean = false;

  constructor(private service: SintetizeService){}

  public saveWord() {
    if(this.word.valid && this.words.length < 5){//todo - adicionar validador especifico e mensagem de erro quando terminar, validar so letras, validar tamanho, validar espaços
      this.words.push(this.word.value);
      this.word = new FormControl('')
      this.saveAnswer();
    }
  }

  public disabledButton(){
    
  }


  
  private saveAnswer(){
    if(this.words.length == 5){  
      let anwser: IAnswer = {
        id: "1",
        words: this.words,
        actor: 'Teste'
      }        

      if (!this.question.anwers) {
        this.question.anwers = [];
      }
      
      this.question.anwers.push(anwser);
      this.service.saveWord(this.question);
      this.limitWord = true;
    }
  }

}
