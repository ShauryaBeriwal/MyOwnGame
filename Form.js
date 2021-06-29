class Form{
    constructor(){
        this.reset = createButton("Reset");
    }

    display(){
        this.reset.position(25,50);
        this.reset.style("width", "100px");
        this.reset.style("height", "30px");
        this.reset.style("background", "lightBlue");

        this.reset.mousePressed(()=>{
           
        

        });
    }
}