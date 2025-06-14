async function books() {
    try {
        let response = await axios.get("https://api.potterdb.com/v1/books/70e3ae5d-e423-4446-a895-3efd0abb6b78");
        console.log(response);
        let book = `
            <h1>${response.data.data.attributes.title}</h1>
            <div class=book1>
                <div class=book_info1>
                    <img src="${response.data.data.attributes.cover}" alt="book1">
                        <div class="infoBook">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Title </th>
                                        <td>${response.data.data.attributes.title}</td>
                                    </tr>
                                    <tr>
                                        <th> Author </th>
                                        <td>${response.data.data.attributes.author}</td>
                                    </tr>
                                    <tr>
                                        <th>Release Date</th>
                                        <td>${response.data.data.attributes.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th>Dedication</th>
                                        <td>${response.data.data.attributes.dedication}</td>
                                    </tr>
                                    <tr>
                                        <th>Summary </th>
                                        <td>${response.data.data.attributes.summary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <div class=box2 style="height:200vh;">
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <ul>
                            <li> 1. Dudley Demented  </li>
                            <li>2. A Peck of Owls </li>
                            <li>3. The Advance Guard </li>
                            <li>4. Number Twelve Grimmauld Place </li>
                            <li>5. The Order of the Phoenix </li>
                            <li>6. The Noble and Most Ancient House of Black </li>
                            <li>7. The Ministry of Magic </li>
                            <li>8. The Hearing </li>
                            <li>9. The Woes of Mrs Weasley </li>
                            <li>10. Luna Lovegood </li>
                            <li>11. The Sorting Hat's New Song </li>
                            <li>12. Professor Umbridge </li>
                            <li>13. Detention with Dolores </li>
                            <li>14. Percy and Padfoot </li>
                            <li>15. The Hogwarts High Inquisitor </li>
                            <li>16. In The Hog's Head </li>
                            <li>17. Educational Decree Number Twenty-Four </li>
                            <li>18. Dumbledore's Army </li>
                            <li>19. The Lion and the Serpent </li>
                            <li>20. Hagrid's Tale </li>
                            <li>21. The Eye of the Snake </li>
                            <li>22. St Mungo's Hospital for Magical Maladies and Injuries </li>
                            <li>23. Christmas on the Closed Ward </li>
                            <li>24. Occlumency </li>
                            <li>25. The Beetle at Bay </li>
                            <li>26. Seen and Unforeseen </li>
                            <li>27. The Centaur and the Sneak </li>
                            <li>28. Snape's Worst Memory </li>
                            <li>29. Careers Advice </li>
                            <li>30. Grawp </li>
                            <li>31. O.W.L.s </li>
                            <li>32. Out of the Fire </li>
                            <li>33. Fight and Flight </li>
                            <li>34. The Department of Mysteries </li>
                            <li>35. Beyond the Veil </li>
                            <li>36. The Only One He Ever Feared </li>
                            <li>37. The Lost Prophecy </li>
                            <li>38. The Second War Begins </li>
                        <ul>

                    </div>
            <div>
        `;
        document.getElementById("main").innerHTML = book;

    } catch (error) {
        let er = document.getElementById("main");
        er.innerHTML = error;
        er.style.color = "white";
    }
}

books()