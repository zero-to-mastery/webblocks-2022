    function blockl() {
        var name = document.querySelector("#name").value;
        name = name.toUpperCase();
        var block = document.querySelector(".block");
        for (var i = 0; i < name.length; i++) {

            var l = document.createElement('div');
            l.textContent = name[i];
            if (i % 2 == 0)
                l.classList.add('letter');
            else
                l.classList.add('letter1');
            block.appendChild(l);


        }
    };

    function clearst() {
        var name = document.querySelector("#name").value;
        const lett = document.querySelectorAll('.letter');
        const lett2 = document.querySelectorAll('.letter1');
        var j = 0,
            k = 0;
        document.querySelector("#name").value = "";
        for (var i = 0; i < lett.length; i++)
            lett[i].remove();

        for (var i = 0; i < lett2.length; i++)
            lett2[i].remove();

    };
