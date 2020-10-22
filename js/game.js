let game = {
    start: function() {
        let ctx = document.getElementById('mycanvas').getContext("2d");
        let background = new Image();
        
        background.src = '../img/background.png';
        background.addEventListener('load', () => {
            window.requestAnimationFrame(() => {
                ctx.drawImage(background, 0, 0);
            });
        });
    }
};

game.start();
