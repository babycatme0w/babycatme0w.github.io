const ports =[
    {
    reward : "ค่าย1-2" ,
    name : "ค่ายโอลิมปิกวิชาการ สอวน. คอมพิวเตอร์ ค่าย 1 และ ค่าย 2" ,
    doing : "มหาวิทยาลัยศิลปากร" ,
    pic : "https://i.postimg.cc/hP5g7215/sx.png" ,
    pic2 : "https://i.postimg.cc/Y0GQ3XTP/Screenshot-2025-12-06-145131.png"
    } ,
    {
    reward : "ค่าย1-2" ,
    name : "ค่ายโอลิมปิกวิชาการ สอวน. คณิตศาสตร์ ค่าย 1 และ ค่าย 2" ,
    doing : "มหาวิทยาลัยศิลปากร" ,
    pic : "https://i.postimg.cc/ZqJfYSy4/Screenshot-2025-12-06-140332.png",
    pic2 : "https://i.postimg.cc/v87vPmqj/Screenshot-2025-12-06-152835.png"
    } ,
    {
    reward : "เข้ารอบ 36 ทีมสุดท้าย" ,
    name : "Coding & AI – Acceleration ภายใต้โครงการ Coding Thailand 2025" ,
    doing : "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (Depa)" ,
    pic : "https://i.postimg.cc/qMtSW48q/Screenshot-2025-12-06-140340.png",
    pic2 : "https://i.postimg.cc/g2x8PcsX/Screenshot-2025-12-06-152939.png"
    } ,
    {
    reward : "รองชนะเลิศอันดับที่ 2" ,
    name : "Micro:bit" ,
    doing : "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง" ,
    pic : "https://i.postimg.cc/85Pn4S12/Screenshot-2025-12-06-140344.png",
    pic2 : "https://i.postimg.cc/254qz1B9/Screenshot-2025-12-06-153031.png"
    } ,
    {
    reward : "เข้ารอบ 10 ทีมสุดท้าย" ,
    name : "BAMSO 2025" ,
    doing : "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)" ,
    pic : "https://i.postimg.cc/0jjFkqFN/bamso.png",
    pic2 : "https://i.pinimg.com/736x/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg"
    } ,
    {
    reward : "เข้ารอบ 36 ทีมสุดท้าย" ,
    name : "Bangmod Hackathon 2025" ,
    doing : "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี " ,
    pic : "https://i.postimg.cc/j5w3mh7X/Screenshot-2568-12-06-at-14-07-25.png",
    pic2 : "https://i.pinimg.com/736x/9d/4a/49/9d4a49b2b2b9392d3f844c4dbcff52d6.jpg"
    }
]
const box_element = document.getElementsByClassName("box")
console.log(box_element)
for(let i = 0 ; i < ports.length ; i++){
    let img_element = document.createElement("img")
    img_element.setAttribute("src" , ports[i].pic)
    box_element[i].prepend(img_element)
    img_element.style.height="200px"
    img_element.style.width="300px"
    img_element.style.alignSelf="center"
    img_element.style.marginTop="20px"
    img_element.style.borderRadius="10px"
    let pic1 = ports[i].pic
    let pic2 = ports[i].pic2
    let imges_link = [pic1 , pic2]
    let state = false
    img_element.addEventListener("click" , () => {
        if(state == true){
            img_element.setAttribute("src" , imges_link[0])
            state = false
        }
        else{
            img_element.setAttribute("src" , imges_link[1])
            state = true
        }
    })
}
const box2_elemant = document.querySelectorAll(".box")
console.log(box2_elemant)
box2_elemant.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = '#d99db4';
    });
    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'rgb(255, 240, 246)';
    });
});