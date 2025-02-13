export function stepsRangeSlider() {

    function circle() {
        const slider = document.querySelector(".steps__slider");
        const circle = document.querySelector(".steps__circle");
        const valueSpan = document.querySelector(".steps__value-span");
        const start = document.querySelector("#start-circle");

        const radius = circle.offsetWidth / 2;
        const steps = 6;

        let circleValue = 1;

        let latestSteps = 0;

        for (let i = 1; i < steps; i++) {
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", "8");
            svg.setAttribute("height", "8");
            svg.setAttribute("viewBox", "0 0 8 8");
            svg.setAttribute("fill", "none");
            svg.classList.add("point-circle");

            const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            ellipse.setAttribute("cx", "3.99921");
            ellipse.setAttribute("cy", "4");
            ellipse.setAttribute("rx", "4");
            ellipse.setAttribute("ry", "4");
            ellipse.setAttribute("transform", "rotate(90 3.99921 4)");
            ellipse.setAttribute("fill", "currentColor");

            svg.appendChild(ellipse);
            circle.appendChild(svg);
        }

        const stepPoints = document.querySelectorAll(".point-circle");

        stepPoints.forEach((point, index) => {
            const startAngle = -Math.PI / 2;
            const stepSize = (2 * Math.PI) / steps;
            const newX = radius * Math.cos(startAngle + (index + 1) * stepSize);
            const newY = radius * Math.sin(startAngle + (index + 1) * stepSize);

            point.style.left = newX + radius - 5 + "px";
            point.style.top = newY + radius - 5 + "px";

        })


        slider.style.left = radius + "px";
        slider.style.top = "0";

        slider.addEventListener("mousedown", startDrag);
        slider.addEventListener("touchstart", startDrag);


        function startDrag(e) {
            e.preventDefault();

            document.addEventListener("mousemove", moveSlider);
            document.addEventListener("touchmove", moveSlider);
            document.addEventListener("mouseup", stopDrag);
            document.addEventListener("touchend", stopDrag);
        }

        function moveSlider(e) {
            const mouseX = e.clientX || e.touches[0].clientX;
            const mouseY = e.clientY || e.touches[0].clientY;


            const circleRect = circle.getBoundingClientRect();

            const angle = Math.atan2(
                mouseY - circleRect.top - radius,
                mouseX - circleRect.left - radius
            );


            const stepSize = (2 * Math.PI) / steps;

            const startAngle = -Math.PI / 2;


            let closestStep = Math.round((angle - startAngle) / stepSize);
            closestStep = (closestStep + steps) % steps;

            if (closestStep - latestSteps > 2) {
                return
            }


            latestSteps = closestStep

            const newX = radius * Math.cos(startAngle + closestStep * stepSize);
            const newY = radius * Math.sin(startAngle + closestStep * stepSize);


            slider.style.left = newX + radius + "px";
            slider.style.top = newY + radius + "px";

            const percentage = (closestStep / steps) * 6;

            valueSpan.textContent = Math.round(percentage) + 1;

            percentage === 0
                ? start.classList.add("hide")
                : start.classList.remove("hide");

            // зачем?
            circleValue = Math.round(percentage);

            updateCircle(percentage);
            circleUpdateState();
            circleUpdateClasses();
        }

        function stopDrag(e) {
            document.removeEventListener("mousemove", moveSlider);
            document.removeEventListener("touchmove", moveSlider);
            document.removeEventListener("mouseup", stopDrag);
            document.removeEventListener("touchend", stopDrag);
        }

        function updateCircle(percentage) {
            const circlePath = document.getElementById("circle-path2");
            const circumference = 2 * Math.PI * 117;
            const initialOffset = circumference - circumference * (percentage / -6);

            circlePath.style.strokeDasharray = circumference;
            circlePath.style.strokeDashoffset = initialOffset;

            stepPoints.forEach((point, index) => {
                if (index < latestSteps) {
                    point.style.color = '#ffac30'
                } else {
                    point.style.color = '#fff'
                }
            })
        }

        updateCircle(0);
    }

    circle();

    function updateClass() {
        // const cirlceSlide = document.getElementById("circleSlide");
        //
        // const slider = document.querySelector(".steps__slider");
        // slider.addEventListener("mouseover", (e) => {
        //     cirlceSlide.classList.add("swiper-no-swiping");
        // });
        // slider.addEventListener("mouseout", (e) => {
        //     cirlceSlide.classList.remove("swiper-no-swiping");
        // });
    }

    updateClass();

    function circleUpdateClasses() {

        const selectors = document.querySelectorAll(".steps__step");
        const numberStep = document.querySelector(".steps__value-span");

        selectors.forEach((selector, index) => {

            if (index + 1 === Number(numberStep.textContent)) {
                selector.classList.add('step_show')
            } else {
                selector.classList.remove('step_show');
            }
        });
    }

    circleUpdateClasses();

    function circleUpdateState() {
        // const circle = document.querySelector(".steps__value-span");
        // const circlePrice = document.querySelector(".cost-calculation__price");
        // let totalPrice = 0;
        //
        // const circleWraps = document.querySelectorAll(".cost-calculation__level");
        // circleWraps.forEach((circleWrap) => {
        //     if (circleWrap.classList.contains("cost-calculation__level_active")) {
        //         const textContent = circleWrap.getAttribute('factor');
        //
        //         switch (textContent.trim()) {
        //             case 'Elite':
        //                 totalPrice = 3640.625 * circle.textContent;
        //                 circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
        //                 break
        //             case 'Vip':
        //                 totalPrice = 5384 * circle.textContent;
        //                 circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
        //                 break
        //             case 'Extra':
        //                 totalPrice = 7651 * circle.textContent;
        //                 circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
        //                 break
        //             default:
        //                 totalPrice = 0;
        //         }
        //     }
        // });
    }


}
