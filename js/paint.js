document.body.style.overflow = 'hidden';

const canvas = document.querySelector('.paint_screen'),
toolBtns = document.querySelectorAll('.tool'),
shapeBtns = document.querySelectorAll('.shape'),
fillColor = document.querySelector('#checkbox'),
sizeSlider = document.querySelector('#brush_width'),
colorPicker = document.querySelector('#input_color'),
clearCanvas = document.querySelector("#clear"),
saveCanvas = document.querySelector("#save"),
undoBtn = document.querySelector("#undo"),
redoBtn = document.querySelector("#redo");
ctx = canvas.getContext('2d');
const brush_input = document.getElementById('brush_width');
const widht_input = document.querySelector('.paint_input_container');
const shapes_container = document.querySelector('.paint_shape_container');

let prevMouseX, prevMouseY, 
snapshot,

undoStack = [];
redoStack = [];

brushWidth = 5,
selectedTool = 'brush',
isDrawing = false,
selectedColor = "#000";
widht_input.style.display = 'flex';
shapes_container.style.display = 'none';

const setCanvasBackground = () => {
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0, canvas.width, canvas.heigth);
    ctx.fillStyle = selectedColor;
}

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth;
    canvas.heigth = canvas.offsetHeight;
    setCanvasBackground();
});

// const drawRect = (e) =>{
//     if (!fillColor.checked){
//         return ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
//     }
//     ctx.fillRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
// }
// const drawCircle = (e) => {
//     ctx.beginPath();
//     let radius = Math.sqrt(Math.pow((prevMouseX - e.offsetX), 2) + Math.pow((prevMouseY - e.offsetY), 2))
//     ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
//     fillColor.checked ? ctx.fill() : ctx.stroke();
// }
// const drawLine = (e) => {
//     ctx.beginPath();
//     ctx.moveTo(prevMouseX, prevMouseY);
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke()
// }
// const drawTriangle = (e) => {
//     ctx.beginPath();
//     ctx.moveTo(prevMouseX, prevMouseY);
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
//     ctx.lineTo(prevMouseX * 2 - e.offsetX, e.offsetY);
//     ctx.closePath();
//     fillColor.checked ? ctx.fill() : ctx.stroke();

// }
// const startDraw = (e) => {
//     isDrawing = true;
//     prevMouseX = e.offsetX;
//     prevMouseY = e.offsetY;
//     ctx.beginPath();
//     ctx.lineWidth = brushWidth;
//     ctx.strokeStyle = selectedColor;
//     ctx.fillStyle = selectedColor;
//     snapshot = ctx.getImageData(0, 0, canvas.width, canvas.heigth);
// }

// function hexToRgba(hex, alpha) {
//     // Удаление символа # (если есть)
//     hex = hex.replace(/^#/, '');

//     // Разделение hex на красный, зеленый и синий
//     let bigint = parseInt(hex, 16);
//     let r = (bigint >> 16) & 255;
//     let g = (bigint >> 8) & 255;
//     let b = bigint & 255;

//     // Возвращение строки в формате rgba
//     return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// }
// const drawing = (e) => {
//     if (!isDrawing) return;

//     ctx.putImageData(snapshot, 0, 0);

//     if (selectedTool === 'brush' || selectedTool === 'eraser'){
//         ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
//         ctx.lineTo(e.offsetX, e.offsetY);
//         ctx.stroke();

//     } else if (selectedTool === 'rectangle'){
//         ctx.lineWidth = 5;
//         drawRect(e);
//     } else if (selectedTool === 'circle'){
//         ctx.lineWidth = 5;
//         drawCircle(e);
//     } else if (selectedTool === 'triangle'){
//         ctx.lineWidth = 5;
//         drawTriangle(e);
//     } else if (selectedTool === 'line'){
//         drawLine(e);
//     } else if (selectedTool === 'marker'){
//         ctx.strokeStyle = hexToRgba(selectedColor, 0.5);
//         ctx.lineTo(e.offsetX, e.offsetY);
//         ctx.stroke();
//     }
    
    
// }
const startDraw = (e) => {
    isDrawing = true;
    prevMouseX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    prevMouseY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
  
    // Создаем новый снимок перед началом нового действия
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.heigth);
  
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = selectedColor;
    ctx.fillStyle = selectedColor;
    redoStack = [];
  }

const drawing = (e) => {
    if (!isDrawing) return;

    ctx.putImageData(snapshot, 0, 0);

    let currentX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    let currentY = e.touches[0].clientY - canvas.getBoundingClientRect().top;

    if (selectedTool === 'brush' || selectedTool === 'eraser') {
        ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    } else if (selectedTool === 'rectangle') {
        ctx.lineWidth = 5;
        drawRect(prevMouseX, prevMouseY, currentX, currentY);
    } else if (selectedTool === 'circle') {
        ctx.lineWidth = 5;
        drawCircle(prevMouseX, prevMouseY, currentX, currentY);
    } else if (selectedTool === 'triangle') {
        ctx.lineWidth = 5;
        drawTriangle(prevMouseX, prevMouseY, currentX, currentY);
    } else if (selectedTool === 'line') {
        drawLine(prevMouseX, prevMouseY, currentX, currentY);
    } else if (selectedTool === 'marker') {
        ctx.strokeStyle = hexToRgba(selectedColor, 0.5);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();
    }
}

const drawRect = (startX, startY, endX, endY) => {
    if (!fillColor.checked) {
        ctx.strokeRect(startX, startY, endX - startX, endY - startY);
    } else {
        ctx.fillRect(startX, startY, endX - startX, endY - startY);
    }
}

const drawCircle = (startX, startY, endX, endY) => {
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow((endX - startX), 2) + Math.pow((endY - startY), 2))
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    if (fillColor.checked) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

const drawLine = (startX, startY, endX, endY) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}

const drawTriangle = (startX, startY, endX, endY) => {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.lineTo(startX * 2 - endX, endY);
    ctx.closePath();
    if (fillColor.checked) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
}

const hexToRgba = (hex, alpha) => {
    hex = hex.replace(/^#/, '');
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
toolBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.tool_container.paint_active').classList.remove('paint_active');
        btn.classList.add('paint_active');
        selectedTool = btn.id;
        if (selectedTool === 'brush' || selectedTool === 'eraser' || selectedTool === 'marker'){
            widht_input.style.display = 'flex';
        }
        else {
            widht_input.style.display = 'none';
        }
        if (selectedTool === 'shapes') {
            shapes_container.style.display = 'flex';
        }
        else {
            shapes_container.style.display = 'none';
        }
        console.log(btn.id);
    });
});


shapeBtns.forEach( shape => {
    shape.addEventListener('click', () => {
        document.querySelector('.paint_shape_container .active_shape').classList.remove('active_shape');
        shape.classList.add('active_shape');

        selectedTool = shape.id;
    });
});

const saveSnapshot = () => {
    redoStack = [];
    undoStack.push(ctx.getImageData(0, 0, canvas.width, canvas.heigth))
}
const undo = () => {
    if (undoStack.length > 1){
        redoStack.push(undoStack.pop());
        const prevImageData = undoStack[undoStack.length - 1];
        ctx.putImageData(prevImageData, 0, 0);
    }

};
  
const redo = () => {
    if (redoStack.length > 0){
        undoStack.push(redoStack.pop());
        const nextImageData = undoStack[undoStack.length - 1];
        ctx.putImageData(nextImageData, 0, 0);
    }

};

sizeSlider.addEventListener('change', () => brushWidth = sizeSlider.value);
// canvas.addEventListener('mousedown', startDraw);
// canvas.addEventListener('mousemove', drawing);
// canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('touchstart', startDraw);
canvas.addEventListener('touchmove', drawing);
canvas.addEventListener('touchend', () => {isDrawing = false; saveSnapshot()});

colorPicker.addEventListener('change', () => {
    selectedColor = colorPicker.value;
    console.log(selectedColor);
});


brush_input.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  
  
  const progress = (tempSliderValue / brush_input.max) * 100;
 
  brush_input.style.background = `linear-gradient(to right, #2400FF ${progress}%, #2B2B41 ${progress}%)`;
})

clearCanvas.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.heigth);
    setCanvasBackground();
    undoStack = [];
    redoStack = [];
});
saveCanvas.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
});


  
undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);