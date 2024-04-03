var data = {
    chatinit: {
        title: ["Hello <span class='emoji'> &#128075;</span>", "I am Mr. Chatbot", "How can I help you?"],
        options: ["Services <span class='emoji'> &#128224;</span>", "Check Status <span class='emoji'> &#128221;</span>", "Shopping <span class='emoji'> &#128092;</span>", "Contact us <span class='emoji'> &#128222;</span>"]

    },
    services: {
        title: ["Please select category"],
        options: ['LCD', 'Repairing Phone', 'Display Change','Change IC', 'Others'],
        url: {
        }
    },
    check: {
        title: ["Check your phone status"],
        options: ["First enter your token number", "Enter your brand name", "Enter your model name","Now click on  enter"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    shopping: {
        title: ["Please choose shopping category <span class='emoji'> &#128092;</span>"],
        options: ['LCD', 'Charger', 'headphones'],
        url: {
            more: "https://amzn.eu/d/aYO4hWq",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    contact: {
        title: ["Pick the phone number <span class='emoji'> &#128222;</span>"],
        options: ["7347821882", "6393474051", "6391288298", "priyeshm845@gmail.com", "shivamsingh163248@gmail.com"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    lcd: {
        title: ["An LCD is a type of display that uses liquid crystals to produce an image.", "Click on options"], 
        options: ["Professional LCD Screens", "Window LCD Displays", "Digital Signage Displays", "Interactive Touchscreen Displays"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://amzn.eu/d/eOI0Trw", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]

        }
    },
    repairing: {
        title: ["Fast, Reliable Phone Repair You Can Trust"],
        options: ["Display change", "IC change", "chargering pot", "Glass"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    display: {
        title: ["Unbreakable Brilliance the Future of Phone Displays"],
        options: ["LED Display", "OLED Display", "AMOLED Display","TFT-LCD Display"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },

    change: {
        title: ["Product listing for a phone model with the IC change"],
        options: ["Processor upgrade", "New image sensor", "Increased memory", "Other specific IC alteration"],
        url: {
            more: "https://www.youtube.com/@webhub/videos",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },
    others: {
        title: ["Here are some more options for you"],
        options: ["coming soon", "coming soon", "coming soon", "coming soon"],
        url: {
            more: "https://www.youtube.com/",
            link: ["https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos", "https://www.youtube.com/@webhub/videos"]
        }
    },

}




document.getElementById("init").addEventListener("click", showChatBot);
var cbot = document.getElementById("chat-box");



var len1 = data.chatinit.title.length;

function showChatBot() {
    console.log(this.innerText);
    if (this.innerText == 'START CHAT') {
        document.getElementById('test').style.display = 'block';
        document.getElementById('init').innerText = 'CLOSE CHAT';
        initChat();
    }
    else {
        location.reload();
    }
}

function initChat() {
    j = 0;
    cbot.innerHTML = '';
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, (i * 500));
    }
    setTimeout(function () {
        showOptions(data.chatinit.options)
    }, ((len1 + 1) * 500))

}

var j = 0;
function handleChat() {
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();

}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = '<div>' + options[i] + '</div>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];
    document.querySelectorAll(".opt").forEach(el => { el.remove(); })

    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + findText + '</span>';
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    handleResults(tempObj.title, tempObj.options, tempObj.url);
}


function handleResults(title, options, url) {
    for (let i = 0; i < title.length; i++) {
        var elm = document.createElement("p");
        elm.innerHTML = title[i];
        elm.setAttribute("class", "msg");
        cbot.appendChild(elm);
    }
    const isObjectEmpty = (url) => {
        return JSON.stringify(url) === "{}";

    }
    if (isObjectEmpty(url) == true) {
        console.log("having more options");
        showOptions(options);

    }
    else {
        console.log("end result");
        handleOptions(options, url);

    }
}

function handleOptions(options, url) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var link = url.link && url.link[i] ? url.link[i] : '#'; // Check if url.link is defined
        var inp = '<a class="m-link" href="' + link + '">' + options[i] + '</a>';
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    }

    var opt = document.createElement("span");
    var moreLink = url.more ? url.more : '#'; // Check if url.more is defined
    var inp = '<a class="m-link" href="' + moreLink + '">' + ' See more</a>';

    opt.innerHTML = inp;
    opt.setAttribute("class", "opt chat_link");
    cbot.appendChild(opt);
    handleScroll();
}


function handleScroll() {
    var elem = document.getElementById('chat-box');
    elem.scrollTop = elem.scrollHeight;
}