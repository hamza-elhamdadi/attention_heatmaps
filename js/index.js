
var clicks = [];

function logClick(log) {

    clicks.push({
        x: log.x,
        y: log.y
    });
}

function createBubbleViewInterface(imgUrl, bubbleR, blurR, selector){
    let canvasId = 'mainCanvas';

    let qDiv = selector ? d3.select(`#${selector.questionId}`) : d3.select(`#main`)

    let main_row = qDiv.append('div').attr('class', 'row')

    let canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvas.width = '100%';
    canvas.height = 0.8*canvas.width;

    main_row.append('div')
        .attr('class', 'mx-auto col-8')
        .attr('id', 'canvasCol')

    document.getElementById('canvasCol')
    .append(canvas)

    // console.log(img)
    
    bv.setup(imgUrl, canvasId, bubbleR, blurR, logClick)
    
 }

// window.onload = function(){
//     start('img/dataset5.png', 30, 70)
//     // console.log('tests')
    
// }