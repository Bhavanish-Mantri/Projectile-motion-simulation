class Projectile {
    constructor(element, x, y) {
        this.element = element;
        this.x = x;
        this.y = y;
    }

    moveHorizontal(speed) {
        let intervalHorizontal = setInterval(() => {
            if (this.x >= this.horizontalRange) {
                if (this.y > 0) {
                    this.horizontalRange *= 2;
                } else {
                    clearInterval(intervalHorizontal);

                    let xDist = document.createElement('div');
                    xDist.textContent = this.actualHorizontalRange;
                    xDist.classList.add('xDist');
                    xDist.style.left = this.x + 'px';
                    xDist.style.bottom = this.y + 'px';
                    this.element.parentElement.appendChild(xDist);
                }
            }

            if (this.x % 25 === 0) {
                let path = document.createElement('div');
                path.classList.add('path');
                path.style.left = this.x + 'px';
                path.style.bottom = this.y + 'px';
                this.element.parentElement.appendChild(path);
            }

            this.x++;
            this.element.style.left = this.x + 'px';
        }, 500 / speed);
    }

    moveVertical(velocity) {
        let interval = () => new Promise(resolve => {
            let intervalUp = () => {
                velocity = Math.sqrt(velocity * velocity - 2 * this.g);

                let oneInterval = setTimeout(intervalUp, 500 / velocity);

                if (this.y >= this.maxHeight && isNaN(velocity)) {
                    clearTimeout(oneInterval);

                    let yDist = document.createElement('div');
                    yDist.textContent = this.maxHeight;
                    yDist.classList.add('yDist');
                    yDist.style.left = this.x + 'px';
                    yDist.style.bottom = this.y + 'px';
                    this.element.parentElement.appendChild(yDist);

                    resolve();
                }

                this.y++;
                this.element.style.bottom = this.y + 'px';
            };

            setTimeout(intervalUp, 500 / velocity);
        });

        interval().then(() => {
            let intervalDown = () => {
                velocity = Math.sqrt(velocity * velocity + 2 * this.g);

                let oneInterval = setTimeout(intervalDown, 500 / velocity);

                if (this.y <= 0) {
                    clearTimeout(oneInterval);
                    this.horizontalRange = this.x;
                }

                this.y--;
                this.element.style.bottom = this.y + 'px';
            };

            velocity = 0;
            intervalDown();
        });
    }
}

let initVelocity = document.getElementById('velocity');
let angle = document.getElementById('angle');
let angleMsg = document.getElementById('angleMsg');

let launch = document.getElementById('launch');
let reset = document.getElementById('reset');

let projectileObj = new Projectile(
    document.getElementById('projectile'),
    0,
    0
);

launch.onclick = () => {
    let v = parseInt(initVelocity.value);
    let a = parseInt(angle.value);

    angleMsg.textContent = "";
    if (a < 0) {
        a = 0;
        angle.value = 0;
        angleMsg.textContent = "Angle cannot be less than 0°. Corrected to 0°.";
    } else if (a > 90) {
        a = 90;
        angle.value = 90;
        angleMsg.textContent = "Angle cannot be greater than 90°. Corrected to 90°.";
    }

    if (
        !isNaN(v) &&
        !isNaN(a) &&
        v > 0 &&
        a > 0 &&
        a <= 90 &&
        !projectileObj.x &&
        !projectileObj.y
    ) {
        projectileObj.g = 9.81;

        let vx = v * Math.cos(Math.PI * a / 180);
        let vy0 = v * Math.sin(Math.PI * a / 180);

        projectileObj.maxHeight = Math.round((vy0 * vy0) / (2 * projectileObj.g));
        projectileObj.horizontalRange = Math.round(vx * (2 * vy0 / projectileObj.g));
        projectileObj.actualHorizontalRange = projectileObj.horizontalRange;

        if (Math.floor(vx) > 0) projectileObj.moveHorizontal(vx);
        projectileObj.moveVertical(vy0);
    }
};

reset.onclick = () => {
    initVelocity.value = '';
    angle.value = '';
    angleMsg.textContent = '';

    projectileObj.x = 0;
    projectileObj.y = 0;
    projectileObj.element.style.left = '0px';
    projectileObj.element.style.bottom = '0px';

    document.querySelectorAll('.path, .xDist, .yDist').forEach(el => el.remove());
};
