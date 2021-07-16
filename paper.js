class paper 
{
    var options= {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
    }


    function KeyPressed() {
        if (keyCode === UP_ARROW) {
            MediaStreamTrackEvent.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
        }
    }
}
