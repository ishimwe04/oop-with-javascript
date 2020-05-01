function Stopwatch(){
    let running, startTime, endTime, duration=0;

    this.start= function (){
        if(running)
           throw new Error('stopwatch already running.');
        running=true;
        startTime=new Date();
    }
    this.stop= function(){
        if(!running)
           throw new Error('stopwatch is not running.');
        running=false;
        endTime= new Date();

        const secs= ((endTime.getTime())-(startTime.getTime()))/ 1000;

        duration += secs;
    }

    this.reset= function (){
        running=false;
        startTime= null;
        endTime=null;
        duration=0;
    }

    Object.defineProperty(this, 'duration', {
        get: function (){
            return duration;
        }
    })
}

const sw= new Stopwatch();