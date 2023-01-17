function pipesInPool(input){

    let volumePool = Number(input[0]);
    let firstPipeFlow = Number(input[1]);
    let secondPipeFlow = Number(input[2]);
    let timeWorker = Number(input[3]);

    let totalLitersFirstPipe = firstPipeFlow * timeWorker
    let totalLitersSecondPipe = secondPipeFlow * timeWorker
    let totalLiters = totalLitersFirstPipe + totalLitersSecondPipe

    let totalProcents = (totalLiters / volumePool) * 100
    let firstPipeInProcent = (totalLitersFirstPipe / totalLiters) * 100
    let secondPipeInProcent = (totalLitersSecondPipe / totalLiters) * 100
    let overflows = Math.abs(totalLiters - volumePool)

    if (volumePool >= totalLiters){
        console.log(`The pool is ${totalProcents.toFixed(2)}% full. Pipe 1: ${firstPipeInProcent.toFixed(2)}%. Pipe 2: ${secondPipeInProcent.toFixed(2)}%.`);
    }else{
        console.log(`For ${timeWorker} hours the pool overflows with ${overflows} liters.`);
    }
}
pipesInPool(["100", "100", "100", "2.5"])