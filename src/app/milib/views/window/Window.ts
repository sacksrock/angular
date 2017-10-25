import {View} from '../view';
import {Motor} from '../../engines/motor'
import {Button} from '../buttons/button';

export class Window extends View{

    private sColor:string;
    private buttonx:Button;
    
    
    public setColor(vsColor:string):void{
        this.sColor=vsColor;
    }
    
    paint(vctx:CanvasRenderingContext2D){
        
    
        vctx.fillStyle = this.sColor;  
        vctx.fillRect(this.x, this.y, this.w, this.h);
        
    }
    public setSize(vWith:number, vHeigh:number):void{
        super.setSize(vWith,vHeigh);
    }
    public setPosition(vX:number, vY:number):void{
        super.setSize(vX,vY);
    }

}