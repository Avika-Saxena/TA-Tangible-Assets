fetch('json.json')
    .then(response => response.json())
    .then(data => {
        for (a in data) {
            if (a === "nav") {
                for (b in data[a]) {
                    if (b === "span") {
                        document.querySelector("nav span").innerText = data[a][b];
                    } else if (b === "a")
                        document.querySelector("nav a").innerText = data[a][b];
                }
            } else if (a === "header1") {
                for (b in data[a]) {
                    if (b === "login") {
                        for (c in data[a][b]) {
                            if (c === "a")
                                document.querySelector(".login a").innerText = data[a][b][c];
                            else if (c === "span") {
                                document.querySelector("#Launch_Dashboard").innerText = data[a][b][c];
                            }
                        }
                    } else if (b === "list") {
                        for (c in data[a][b]) {
                            if (c === "a1")
                                document.querySelector("#dashboard").innerText = data[a][b][c];
                            else if (c === "a2")
                                document.querySelector("#Blog").innerText = data[a][b][c];
                            else if (c === "a3")
                                document.querySelector("#data").innerText = data[a][b][c];
                            else if (c === "a4")
                                document.querySelector("#career").innerText = data[a][b][c];
                        }
                    } else if (b === "image") {
                        for (c in data[a][b]) {
                            if (c === "src")
                                document.querySelector(".header1 .logo .logo-img").src = data[a][b][c];
                        }
                    }
                }
            } else if (a === "header2box") {
                for (b in data[a]) {
                    if (b === "h1") {
                        for (c in data[a][b]) {
                            if (c === "h1-1")
                                document.querySelector("#h1-1").innerText = data[a][b][c];
                            else if (c === "h1-2")
                                document.querySelector("#h1-2").innerText = data[a][b][c];
                        }
                    } else if (b === "p") {
                        document.querySelector(".header2box .paragraph").innerText = data[a][b];
                    } else if (b === "button")
                        document.querySelector(".header2box-in span").innerText = data[a][b];
                    else if (b === "image") {
                        for (c in data[a][b]) {
                            if (c === "src") {
                                console.log("reached");
                                document.querySelector(".header-img").src = data[a][b][c];
                            }
                        }
                    }
                }
            } else if (a === "main") {
                for (b in data[a]) {
                    if (b === "main-div-1") {
                        for (c in data[a][b]) {
                            if (c === "main-div-1-in-1")
                                document.querySelector(".main-div-1-in-1 h2").innerText = data[a][b][c];
                            else if (c === "main-div-1-in-2") {
                                for (d in data[a][b][c]) {
                                    if (d === "para1")
                                        document.querySelector("#para1 p").innerText = data[a][b][c][d];
                                    else if (d === "para2")
                                        document.querySelector("#para2 p").innerText = data[a][b][c][d];
                                    else if (d === "para3")
                                        document.querySelector("#para3 p").innerText = data[a][b][c][d];
                                }
                            } else if (c === "main-div-1-in-3")
                                document.querySelector(".main-div-1-in-3 button span").innerText = data[a][b][c];
                            else if (c === "image") {
                                for (d in data[a][b][c]) {
                                    if (d === "src")
                                        document.querySelector("#main-div-1-in-img").src = data[a][b][c][d];
                                }
                            }
                        }
                    } else if (b === "main-div-2") {
                        for (c in data[a][b]) {
                            if (c === "main-div-2-h2")
                                document.querySelector(".main-div-2-h2 h2").innerText = data[a][b][c];
                            else if (c === "main-div-2-in") {
                                for (d in data[a][b][c]) {
                                    if (d === "box1") {
                                        for (e in data[a][b][c][d]) {
                                            if (e === "heading")
                                                document.querySelector("#main-div-2-1-in-box-in-heading-1").innerText = data[a][b][c][d][e];
                                            else if (e === "desc")
                                                document.querySelector("#main-div-2-1-in-box-in-desc-1 p").innerText = data[a][b][c][d][e];
                                        }
                                    } else if (d === "box2") {
                                        for (e in data[a][b][c][d]) {
                                            if (e === "heading")
                                                document.querySelector("#main-div-2-1-in-box-in-heading-2").innerText = data[a][b][c][d][e];
                                            else if (e === "desc")
                                                document.querySelector("#main-div-2-1-in-box-in-desc-2 p").innerText = data[a][b][c][d][e];
                                        }
                                    } else if (d === "box3") {
                                        for (e in data[a][b][c][d]) {
                                            if (e === "heading")
                                                document.querySelector("#main-div-2-1-in-box-in-heading-3").innerText = data[a][b][c][d][e];
                                            else if (e === "desc")
                                                document.querySelector("#main-div-2-1-in-box-in-desc-3 p").innerText = data[a][b][c][d][e];
                                        }
                                    }
                                }
                            }
                        }
                    } else if (b === "main-div-3") {
                        for (c in data[a][b]) {
                            if (c === "main-div-3-in-1-box")
                                document.querySelector(".main-div-3-in-1-box h2").innerText = data[a][b][c];
                            else if (c === "main-div-3-in-2-box")
                                document.querySelector(".main-div-3-in-2-box #email").innerText = data[a][b][c];
                            else if (c === "main-div-3-in-2-box-p")
                                document.querySelector("#main-div-3-in-2-box-p").innerText = data[a][b][c];
                            else if (c === "captcha") {
                                for (d in data[a][b][c]) {
                                    if (d === "captcha-content-p")
                                        document.querySelector(".captcha-content #captcha-content-p/*").innerText = data[a][b][c][d];
                                    else if (d === "captcha-content-privacy")
                                        document.querySelector("#privacy").innerText = data[a][b][c][d];
                                    else if (d === "captcha-content-terms")
                                        document.querySelector("#terms").innerText = data[a][b][c][d];
                                }
                            } else if (c === "button")
                                document.querySelector("#main-div-3-in-2-box-button").innerText = data[a][b][c];
                        }
                    }
                }
            } else if (a === "footer") {
                for (b in data[a]) {
                    if (b === "footer-in-1") {
                        for (c in data[a][b]) {
                            if (c === "logo") {
                                for (d in data[a][b][c]) {
                                    if (d === "src")
                                        document.querySelector("#footer-in-1-box-in-div-a-img").src = data[a][b][c][d];
                                }
                            } else if (c === "p")
                                document.querySelector("#footer-in-1-box-in-p").innerText = data[a][b][c];
                        }
                    } else if (b === "footer-list-box") {
                        for (c in data[a][b]) {
                            if (c === "list1") {
                                for (d in data[a][b][c]) {
                                    if (d === "l1")
                                        document.querySelector("#Resources").innerText = data[a][b][c][d];
                                    else if (d === "l2")
                                        document.querySelector("#Dashboard a").innerText = data[a][b][c][d];
                                    else if (d === "l3")
                                        document.querySelector("#Research-Blog a").innerText = data[a][b][c][d];
                                    else if (d === "l4")
                                        document.querySelector("#API a").innerText = data[a][b][c][d];
                                }
                            } else if (c === "list2") {
                                for (d in data[a][b][c]) {
                                    if (d === "l1")
                                        document.querySelector("#Company").innerText = data[a][b][c][d];
                                    else if (d === "l2")
                                        document.querySelector("#Careers a").innerText = data[a][b][c][d];
                                    else if (d === "l3")
                                        document.querySelector("#Twitter a").innerText = data[a][b][c][d];
                                    else if (d === "l4")
                                        document.querySelector("#Contact a").innerText = data[a][b][c][d];
                                    else if (d === "l5")
                                        document.querySelector("#Terms-of-use a").innerText = data[a][b][c][d];
                                    else if (d === "l6")
                                        document.querySelector("#Privacy-Policy a").innerText = data[a][b][c][d];
                                }
                            } else if (c === "list3") {
                                for (d in data[a][b][c]) {
                                    if (d === "l1")
                                        document.querySelector("#list3-Dashboard").innerText = data[a][b][c][d];
                                    else if (d === "l2")
                                        document.querySelector("#Login a").innerText = data[a][b][c][d];
                                    else if (d === "l3")
                                        document.querySelector("#Register a").innerText = data[a][b][c][d];
                                    else if (d === "l4")
                                        document.querySelector("#Data-Downloads a").innerText = data[a][b][c][d];
                                    else if (d === "l5")
                                        document.querySelector("#Directory a").innerText = data[a][b][c][d];
                                }
                            }
                        }
                    } else if (b === "footer-in-2")
                        document.querySelector(".footer-in-2 span").innerText = data[a][b];
                }
            }
        }
    })
    .catch(error => console.error('Error fetching JSON', error));