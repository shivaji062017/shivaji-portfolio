/*==========================================================
                    PARTICLES CONFIG
==========================================================*/

particlesJS("particles-js", {

    particles: {

        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 900
            }
        },

        color: {
            value: "#2563EB"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: {
            enable: true,
            distance: 150,
            color: "#2563EB",
            opacity: 0.25,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {
                enable: true,
                mode: "grab"
            },

            onclick: {
                enable: true,
                mode: "push"
            },

            resize: true

        },

        modes: {

            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.7
                }
            },

            push: {
                particles_nb: 4
            }

        }

    },

    retina_detect: true

});
