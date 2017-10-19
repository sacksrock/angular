
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
    private imagenWin:Imagen;
    private Window:Window;
    private buttonExit:Button;
    private buttonContin:Button;
    private buttonNew:Button;
    private Window2:Window;
    private Window3:Window;
    private pmw=DataHolder.instance.nScreenWidth*0.6;
    private pmh=DataHolder.instance.nScreenHeight*0.6;
    private pmx=DataHolder.instance.nScreenWidth2-(this.pmw>>1);
    private pmy=DataHolder.instance.nScreenHeight2-(this.pmh>>1);
    private lblPregunta:Label;
    private buttonResp1:Button;
    private buttonResp2:Button;
    private buttonResp3:Button;
    private buttonResp4:Button;
    private buttonx:Button;
    private arrPreg:any[];
    private arrResp:any[];
    private arrRespOk:any[];


    constructor(vMotor:Motor){
        this.motor=vMotor;
        this.imagenFondo=new Imagen(this.motor,0,0,DataHolder.instance.nScreenWidth,DataHolder.instance.nScreenHeight);
        this.imagenFondo.setImg('./assets/backmain.jpg');
        this.motor.setRaiz(this.imagenFondo);
        this.crearEscenarioMenu();
        //creamos el array de las preguntas
        this.arrPreg=["¿Cuantas Champions tiene el Real Madrid?","¿Cuantas Ligas Tiene el Real Madrid?","¿Cuantas Copas del Rey Tiene el Real Madrid?"];
        //creamos las respuestas a las respuestas
        this.arrResp=[["Ninguna","Doce","Diez","Siete"],["Mazo","ElDiablo","Diz","Treinta y Tres"],["Ninguna","Doce","Diez","Diecinueve"]];
        //creamos las respuestas a las respuestas correctas
        this.arrRespOk=["Doce","Treinta y Tres","Diecinueve"];
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
            this.lblPregunta.setTexto(this.arrPreg[0]);
            this.motor.addViewToParentView(this.Window2,this.lblPregunta);
            //Creamos la respuesta 1
            this.buttonResp1 = new Button (this.motor,120,200,200,100);
            this.buttonResp1.setTexto(this.arrResp[0][0]);
            this.motor.addViewToParentView(this.Window2,this.buttonResp1);
            //Creamos la respuesta 2
            this.buttonResp2 = new Button (this.motor,120,300,200,100);
            this.buttonResp2.setTexto(this.arrResp[0][1]);
            this.buttonResp2.setListener(this);
            this.motor.addViewToParentView(this.Window2,this.buttonResp2);
            //Creamos la respuesta 3
            this.buttonResp3 = new Button (this.motor,520,200,200,100);
            this.buttonResp3.setTexto(this.arrResp[0][2]);
            this.buttonResp3.setListener(this);
            this.motor.addViewToParentView(this.Window2,this.buttonResp3);
            //Creamos la respuesta 4
            this.buttonResp4 = new Button (this.motor,520,300,200,100);
            this.buttonResp4.setTexto(this.arrResp[0][3]);
            this.buttonResp4.setListener(this);
            this.motor.addViewToParentView(this.Window2,this.buttonResp4);
            //Creamos el boton salir
            this.buttonx = new Button (this.motor,700,-30,200,100);
            this.buttonx.setTexto("X");
            this.motor.addViewToParentView(this.Window2,this.buttonx);
            this.buttonx.setListener(this);

        }
        if(btn==this.buttonContin){
            this.motor.setViewVisibility(this.Window2.uid,true);
        }
        if(btn==this.buttonExit){
            this.buttonExit.setTexto("edu la chupa");
        }
        if(btn==this.buttonx){
            this.motor.setViewVisibility(this.Window2.uid,false);
            
        }
        if(btn.getlbl().getTexto()==this.arrRespOk[0]){
            this.lblPregunta.setTexto(this.arrPreg[1]);
            this.buttonResp1.setTexto(this.arrResp[1][0]);
            this.buttonResp2.setTexto(this.arrResp[1][1]);
            this.buttonResp3.setTexto(this.arrResp[1][2]);
            this.buttonResp4.setTexto(this.arrResp[1][3]);
        }        
        else if(btn.getlbl().getTexto()==this.arrRespOk[1]){
            this.lblPregunta.setTexto(this.arrPreg[2]);
            this.buttonResp1.setTexto(this.arrResp[2][0]);
            this.buttonResp2.setTexto(this.arrResp[2][1]);
            this.buttonResp3.setTexto(this.arrResp[2][2]);
            this.buttonResp4.setTexto(this.arrResp[2][3]);
        }
        else if(btn.getlbl().getTexto()==this.arrRespOk[2]){
            this.Window3 = new Window (this.motor,this.pmx,this.pmy,this.pmw,this.pmh);
            this.motor.addViewToParentView(this.imagenFondo,this.Window3);
            this.imagenWin=new Imagen(this.motor,0,0,this.pmw,this.pmh);
            this.imagenWin.setImg('./assets/win.png');
            this.motor.addViewToParentView(this.Window3,this.imagenWin);
           
            
        }
    }


    screenSizeChanged?(vWidth:number,vHeight:number):void{
        console.log("SE HA ACTUALIZADO EL TEMAÑO DE LA PANTALLA");
      }

}