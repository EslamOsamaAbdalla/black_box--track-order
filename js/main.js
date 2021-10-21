const main = document.querySelector("main");
const aside = document.querySelector("aside");
const asideBtn = document.querySelector("nav > button");
const logo = document.querySelector("#logo a");
const userInfoName = document.querySelector("#user-info > div");
const userInfoImg = document.querySelector("#user-info > img");
const asideContainerMiniTittle = document.querySelectorAll("#aside-container > span");
const listName = document.querySelectorAll(".list-name");
const listArrow = document.querySelectorAll(".list-arrow");
const asideContainerUlA = document.querySelectorAll("#aside-container ul > a");
const asideContainerUlIcon = document.querySelectorAll("#aside-container ul > a > i");
asideBtn.onclick = function(){
    if (window.outerWidth > 867) {
        if (aside.style.width == "5%") {
            aside.style.width = "15%";
            main.style.width = "85%";
            setTimeout(() => {
                logo.style.fontSize = "20px";
                userInfoName.style.display = "flex";
                userInfoImg.style.width = "60px";
                userInfoImg.style.height = "60px";
                for (let g = 0; g < asideContainerMiniTittle.length; g++) {
                    asideContainerMiniTittle[g].style.display = "inline";
                }
                for (let g = 0; g < listName.length; g++) {
                    listName[g].style.display = "inline";
                }
                for (let g = 0; g < listArrow.length; g++) {
                    listArrow[g].style.display = "inline";
                }
                for (let g = 0; g < asideContainerUlA.length; g++) {
                    asideContainerUlA[g].style.justifyContent  = "flex-start";
                    asideContainerUlA[g].style.width  = "100%";
                    asideContainerUlA[g].style.margin  = "0";
                }
                for (let g = 0; g < asideContainerUlIcon.length; g++) {
                    asideContainerUlIcon[g].style.marginRight  = "10px";
                    asideContainerUlIcon[g].style.fontSize  = "16px";
                }
            }, 500);
        } else {
            aside.style.transition = "width 1s";
            main.style.transition = "width 1s";
            aside.style.width = "5%";
            main.style.width = "95%";
            userInfoName.style.display = "none";
            userInfoImg.style.width = "40px";
            userInfoImg.style.height = "40px";
            logo.style.fontSize = "11px";
            for (let g = 0; g < asideContainerMiniTittle.length; g++) {
                asideContainerMiniTittle[g].style.display = "none";
            }
            for (let g = 0; g < listName.length; g++) {
                listName[g].style.display = "none";
            }
            for (let g = 0; g < listArrow.length; g++) {
                listArrow[g].style.display = "none";
            }
            for (let g = 0; g < asideContainerUlA.length; g++) {
                asideContainerUlA[g].style.justifyContent  = "center";
                asideContainerUlA[g].style.width  = "60%";
                asideContainerUlA[g].style.margin  = " 5px auto";
            }
            for (let g = 0; g < asideContainerUlIcon.length; g++) {
                asideContainerUlIcon[g].style.marginRight  = "0";
                asideContainerUlIcon[g].style.fontSize  = "20px";
            }
        }
    } else {
        if (aside.style.width == "15%") {
            aside.style.width = "30%";
            main.style.width = "70%";
            setTimeout(() => {
                logo.style.fontSize = "20px";
                userInfoName.style.display = "flex";
                userInfoImg.style.width = "60px";
                userInfoImg.style.height = "60px";
                for (let g = 0; g < asideContainerMiniTittle.length; g++) {
                    asideContainerMiniTittle[g].style.display = "inline";
                }
                for (let g = 0; g < listName.length; g++) {
                    listName[g].style.display = "inline";
                }
                for (let g = 0; g < listArrow.length; g++) {
                    listArrow[g].style.display = "inline";
                }
                for (let g = 0; g < asideContainerUlA.length; g++) {
                    asideContainerUlA[g].style.justifyContent  = "flex-start";
                    asideContainerUlA[g].style.width  = "100%";
                    asideContainerUlA[g].style.margin  = "0";
                }
                for (let g = 0; g < asideContainerUlIcon.length; g++) {
                    asideContainerUlIcon[g].style.marginRight  = "0";
                    asideContainerUlIcon[g].style.fontSize  = "16px";
                }
            }, 500);
        } else {
            aside.style.transition = "width 1s";
            main.style.transition = "width 1s";
            aside.style.width = "15%";
            main.style.width = "85%";
            userInfoName.style.display = "none";
            userInfoImg.style.width = "40px";
            userInfoImg.style.height = "40px";
            logo.style.fontSize = "9px";
            for (let g = 0; g < asideContainerMiniTittle.length; g++) {
                asideContainerMiniTittle[g].style.display = "none";
            }
            for (let g = 0; g < listName.length; g++) {
                listName[g].style.display = "none";
            }
            for (let g = 0; g < listArrow.length; g++) {
                listArrow[g].style.display = "none";
            }
            for (let g = 0; g < asideContainerUlA.length; g++) {
                asideContainerUlA[g].style.justifyContent  = "center";
                asideContainerUlA[g].style.width  = "60%";
                asideContainerUlA[g].style.margin  = " 5px auto";
            }
            for (let g = 0; g < asideContainerUlIcon.length; g++) {
                asideContainerUlIcon[g].style.marginRight  = "0";
                asideContainerUlIcon[g].style.fontSize  = "20px";
            }
        }
    }
    
}
const asideContainerUl = document.querySelectorAll("#aside-container ul");
const asideContainerUlLi = document.querySelectorAll("#aside-container ul li");
asideContainerUl.forEach(i =>{
    i.onclick = function(){
        for (let y = 1; y < this.children.length; y++) {
            if (this.children[y].style.visibility == "visible") {
                this.children[y].style.visibility = "hidden";
                this.children[y].style.opacity = "0";
                setTimeout(() => {
                    this.children[y].style.display = "none"
                }, 500);
            } else {
                this.children[y].style.display = "block";
                this.children[y].style.transition = "all 0.5s";
                setTimeout(() => {
                    this.children[y].style.visibility = "visible";
                    this.children[y].style.opacity = "1"; 
                }, 500);
            }
        }
    }
})