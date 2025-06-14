async function books() {
    try {
        let response = await fetch("https://api.potterdb.com/v1/books/2d1aed06-7f75-4f2d-b9c5-debfe00a50ec");
        let book_data = await response.json();
        console.log(book_data);
        let book = `
            <h1>${book_data.data.attributes.title}</h1>
            <div class=book1>
                <div class=book_info1>
                    <img src="${book_data.data.attributes.cover}" alt="book1">
                        <div class="infoBook">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Title </th>
                                        <td>${book_data.data.attributes.title}</td>
                                    </tr>
                                    <tr>
                                        <th> Author </th>
                                        <td>${book_data.data.attributes.author}</td>
                                    </tr>
                                    <tr>
                                        <th>Release Date</th>
                                        <td>${book_data.data.attributes.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th>Dedication</th>
                                        <td>${book_data.data.attributes.dedication}</td>
                                    </tr>
                                    <tr>
                                        <th>Summary </th>
                                        <td>${book_data.data.attributes.summary}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
            <div class=box2>
                <h2 style="text-align:left;margin-left:25px;padding-left:5px;color:white;"> Chapters </h2>
                    <div class=chapters>
                        <div>
                            <span> 1. The Boy Who Lived </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 2. The Vanishing Glass </span>
                            
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 3. The Letter from No One </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 4.The Keeper of the Keys </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 5.Diagon Alley </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 6. The Journey from Platform Nine and Three-Quarters</span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 7. The Sorting Hat </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 8. The Potions Master </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 9. The Midnight Duel </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 10.Hallowe'en </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 11. Quidditch </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 12. The Mirror of Erised </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 13. Nicolas Flamel </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 14. Norbert the Norwegian Ridgeback </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 15. The Forbidden Forest </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 16. Through the Trapdoor </span>
                            <i class="fa-solid fa-play"></i>
                        </div>
                        <div>
                            <span> 17. The Man with Two Faces </span>
                            <i class="fa-solid fa-play"></i>
                        </div>

                    </div>
            <div>
        `;


        document.getElementById("main").innerHTML = book;

    } catch (error) {
        document.getElementById("main").innerHTML = error;
    }
}

books()