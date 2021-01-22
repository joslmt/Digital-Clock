window.onload = () =>{
    const fullh = document.querySelector(".full-hours");
    const monthY = document.querySelector(".month");
    const change = document.querySelector("img#change");
    const getTime = () => {
        const date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        const day = date.getDay();
        const month = date.getMonth();
        h = checkT(h);
        m = checkT(m);
        function checkT(i) {
            if (i < 10) {
                i = "0" + i;}
            return i;
        }
        //actual day week
        switch(day){
            case 1:
                const b1 = document.querySelector("#bt1")
                b1.style.background = 'red';
            break;
            case 2:
                const b2 = document.querySelector("#bt2")
                b2.style.background = 'red';
                console.log("martes");
            break;
            case 3:
                const b3 = document.querySelector("#bt3")
                b3.style.background = 'red';
                console.log("miércoles");
            break;
            case 4:
                const b4 = document.querySelector("#bt4")
                b4.style.background = 'red';
                console.log("jueves");
            break;
            case 5:
                const b5 = document.querySelector("#bt5")
                b5.style.background = 'red';
                console.log("viernes");
            break;
            case 6:
                const b6 = document.querySelector("#bt6")
                b6.style.background = 'red';
                console.log("sábado");
            break;
            case 7:
                const b7 = document.querySelector("#bt7")
                b7.style.background = 'red';
                console.log("domingo");
            break;
        }
        //actual month
        switch(month){
            case 0:
                monthY.innerHTML = `
                <div id='month'> Jan </div>
                `;
            break;
            case 1:
                monthY.innerHTML = `
                <div id='month'> Feb </div>
                `;
            break;
            case 2:
                monthY.innerHTML = `
                <div id='month'> March </div>
                `;
            break;
            case 3:
                monthY.innerHTML = `
                <div id='month'> April </div>
                `;
            break;
            case 4:
                monthY.innerHTML = `
                <div id='month'> May </div>
                `;
            break;
            case 5:
                monthY.innerHTML = `
                <div id='month'> Jun </div>
                `;
            break;
            case 6:
                monthY.innerHTML = `
                <div id='month'> Jul </div>
                `;
            break;
            case 7:
                monthY.innerHTML = `
                <div id='month'> Aug </div>
                `;
            break;
            case 8:
                monthY.innerHTML = `
                <div id='month'> Sep </div>
                `;
            break;
            case 9:
                monthY.innerHTML = `
                <div id='month'> Oct </div>
                `;
            break;
            case 10:
                monthY.innerHTML = `
                <div id='month'> Nov </div>
                `;
            break;
            case 0:
                monthY.innerHTML = `
                <div id='month'> Dec </div>
                `;
            break;
        }
        fullh.innerHTML = `
        <div ><p id='hora'>${h}:${m}</p></div>
        `;
    }
    const changeColor = () =>{
        const container = document.querySelector(".container");
        container.classList.toggle('new-container-color');
    }
    change.onclick = changeColor;
    getTime();
    setInterval(getTime, 60000);
}