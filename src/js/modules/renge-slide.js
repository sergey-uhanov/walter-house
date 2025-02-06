export function priceRangeSlide() {

    function circle() {
        const slider = document.querySelector(".slider");
        const circle = document.querySelector(".circle");
        const valueSpan = document.querySelector(".value-span");
        const start = document.querySelector("#start");
        const radius = circle.offsetWidth / 2;
        const steps = 101;
        let circleValue = 0;
        let latestSteps = 0;

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


            //мои модификации
            if (Math.abs(closestStep - latestSteps) > 20) {
                return
            }
            // if (latestSteps > closestStep) {
            //     return
            // }

            latestSteps = closestStep

            const newX = radius * Math.cos(startAngle + closestStep * stepSize);
            const newY = radius * Math.sin(startAngle + closestStep * stepSize);


            slider.style.left = newX + radius + "px";
            slider.style.top = newY + radius + "px";

            const percentage = (closestStep / steps) * 404;

            valueSpan.textContent = Math.round(percentage);

            percentage === 0
                ? start.classList.add("hide")
                : start.classList.remove("hide");

            // зачем?
            circleValue = Math.round(percentage);

            updateCircle(percentage);
            circleUpdateState();
        }

        function stopDrag(e) {
            document.removeEventListener("mousemove", moveSlider);
            document.removeEventListener("touchmove", moveSlider);
            document.removeEventListener("mouseup", stopDrag);
            document.removeEventListener("touchend", stopDrag);
        }

        function updateCircle(percentage) {
            const circlePath = document.getElementById("circle-path");
            const circumference = 2 * Math.PI * 117;
            const initialOffset = circumference - circumference * (percentage / -404);
            circlePath.style.strokeDasharray = circumference;
            circlePath.style.strokeDashoffset = initialOffset;
        }

        updateCircle(0);
    }

    circle();

    function updateClass() {
        const cirlceSlide = document.getElementById("circleSlide");

        const slider = document.querySelector(".slider");
        slider.addEventListener("mouseover", (e) => {
            cirlceSlide.classList.add("swiper-no-swiping");
        });
        slider.addEventListener("mouseout", (e) => {
            cirlceSlide.classList.remove("swiper-no-swiping");
        });
    }

    updateClass();

    function circleUpdateClasses() {
        const selectors = document.querySelectorAll(".cost-calculation__level");

        selectors.forEach((selector) => {
            selector.addEventListener("click", () => {
                selectors.forEach((otherSelector) => {
                    if (otherSelector !== selector) {
                        otherSelector.classList.remove("cost-calculation__level_active");
                    }
                });

                selector.classList.add("cost-calculation__level_active");
                circleUpdateState();
            });
        });
    }

    circleUpdateClasses();

    function circleUpdateState() {
        const circle = document.querySelector(".value-span");
        const circlePrice = document.querySelector(".cost-calculation__price");
        let totalPrice = 0;

        const circleWraps = document.querySelectorAll(".cost-calculation__level");
        circleWraps.forEach((circleWrap) => {
            if (circleWrap.classList.contains("cost-calculation__level_active")) {
                const textContent = circleWrap.getAttribute('factor');

                switch (textContent.trim()) {
                    case 'Elite':
                        totalPrice = 3640.625 * circle.textContent;
                        circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
                        break
                    case 'Vip':
                        totalPrice = 5384 * circle.textContent;
                        circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
                        break
                    case 'Extra':
                        totalPrice = 7651 * circle.textContent;
                        circlePrice.innerHTML = `${totalPrice.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} <span>UAH</span>`;
                        break
                    default:
                        totalPrice = 0;
                }
            }
        });
    }


}
