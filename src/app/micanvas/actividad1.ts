
import {Panel} from '../milib/views/panels/panel';
import {EventsAdmin,EventsAdminListener} from '../milib/events/eventsadmin';
import {DataHolder} from '../milib/dataholder/dataholder';
import {Motor} from '../milib/engines/motor';
import {Imagen} from '../milib/views/imgs/imagen';
import {Window} from '../milib/views/window/Window';
import {Button,ButtonListener} from '../milib/views/buttons/button';
import {Label} from '../milib/views/labels/label';

export class Actividad1 implements EventsAdminListener,ButtonListener{

    private motor:Motor;
    private panelMenu:Panel;
    private panelJuego:Panel;
    private imagenFondo:Imagen;
    private imagenWindow:Imagen;
    private Window:Window;
    private buttonExit:Button;
    private buttonContin:Button;
    private buttonNew:Button;
    private Window2:Window;
    private pmw=DataHolder.instance.nScreenWidth*0.6;
    private pmh=DataHolder.instance.nScreenHeight*0.6;
    private pmx=DataHolder.instance.nScreenWidth2-(this.pmw>>1);
    private pmy=DataHolder.instance.nScreenHeight2-(this.pmh>>1);
    private lblPregunta:Label;
    private buttonResp1:Button;
    private buttonResp2:Button;
    private buttonResp3:Button;
    private buttonResp4:Button;
    


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        
    }

    /**
     * OJO!! AUNQUE EN ESTE EJEMPLO SE USE EL PANEL, ES OBLIGATORIO CREAR UN OBJETO WINDOW EN EL MILIB, Y AGREGARLE EL BOTON
     * DE SALIR EN LA ESQUINA COMO SALE EN EL LA PAGINA WEB. HABRA QUE QUITAR EL PANEL Y USAR WINDOW
     */
    //Hicimos todo en grupo juanma tuvilla eduardo daniel con ayuda de sergio tay y ramses
    private crearEscenarioMenu():void{
        //this.panelMenu=new Panel(this.motor,pmx,pmy,pmw,pmh);
        this.Window=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
        this.motor.addViewToParentView(this.imagenFondo,this.Window);
        //AÑADIMOSIMAGENALWINDOW
        this.imagenWindow=new Imagen(this.motor,0,0,this.pmw,this.pmh);
        this.imagenWindow.setImg('./assets/fondo.jpg');
        this.motor.addViewToParentView(this.Window,this.imagenWindow);
        
        //AÑADIMOS LAS PROPIEDADES DE LOS BOTONES TAMAÑO POSICION TEXTO Y SE LO AÑADIMOS A WINDOW
        //TAMAÑO Y POSICION BOTONES 
        this.buttonExit= new Button(this.motor,340,300,200,100);
        this.buttonContin= new Button(this.motor,340,180,200,100);
        this.buttonNew= new Button(this.motor,340,60,200,100);
        //AÑADIMOS TEXTO E IMAGEN A LOS BOTONES
        this.buttonExit.setTexto("SALIR");
        this.buttonExit.setImagePath("./assets/red.png");
        this.buttonContin.setTexto("CONTINUAR");
        this.buttonContin.setImagePath("./assets/blue.png");
        this.buttonNew.setTexto("NUEVO JUEGO");
        this.buttonNew.setImagePath("./assets/green.png");
        //AÑADIMOS LOS BOTONES A WINDOW
        this.motor.addViewToParentView(this.Window,this.buttonExit);
        this.motor.addViewToParentView(this.Window,this.buttonContin);
        this.motor.addViewToParentView(this.Window,this.buttonNew);
        //AÑADIMOS LAS ACCIONES DE LOS BOTONES
        this.buttonNew.setListener(this);
        this.buttonContin.setListener(this);
        this.buttonExit.setListener(this);
       
        
        //this.motor.addViewToParentView(this.imagenFondo,this.panelMenu);
    }

    private crearEscenarioJuego():void{
        
    }
    buttonListenerOnClick?(btn:Button):void{
        if(btn==this.buttonNew){
            //Creamos la nueva ventana
            this.Window2=new Window(this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo, this.Window2);
            //Creamos la pregunta 1
            this.lblPregunta = new Label(this.motor,340,40,200,100);
            this.lblPregunta.setTexto("label");
            this.motor.addViewToParentView(this.Window2,this.lblPregunta);
            //Creamos la respuesta 1
            this.buttonResp1 = new Button (this.motor,120,200,200,100);
            this.motor.addViewToParentView(this.Window2,this.buttonResp1);
            //Creamos la respuesta 2
            this.buttonResp2 = new Button (this.motor,120,300,200,100);
            this.motor.addViewToParentView(this.Window2,this.buttonResp2);
            //Creamos la respuesta 3
            this.buttonResp3 = new Button (this.motor,520,200,200,100);
            this.motor.addViewToParentView(this.Window2,this.buttonResp3);
            //Creamos la respuesta 4
            this.buttonResp4 = new Button (this.motor,520,300,200,100);
            this.motor.addViewToParentView(this.Window2,this.buttonResp4);
            


        }
        if(btn==this.buttonContin){
            this.buttonContin.setTexto("edu la chupa");
        }
        if(btn==this.buttonExit){
            this.buttonExit.setTexto("edu la chupa");
        }
        
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

}