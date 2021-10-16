var homeContent = `<section class="promo-tours">
<div class="promo1">
    <p><span class="country">ISRAEL</span><br/>
    <span class="cost">FROM $1000</span></p>
    <button>LEARN MORE</button>
</div>
<div class="promo2">
    <p><span class="country">U.S.A.</span><br/>
        <span class="cost">FROM $1500</span></p>
    <button>LEARN MORE</button>
</div>
<div class="promo3">
    <p><span class="country">AUSTRALIA</span><br/>
        <span class="cost">FROM $1800</span></p>
    <button>LEARN MORE</button>
</div>
</section>
<section class="booking-form">
<p class="header">Booking form</p>
<form>
    <div class="one">
        <input type="text" id="name" name="name" placeholder="name...">
        <input type="email" id="email" name="email" placeholder="email...">
    </div>
    <div class="two">
        <input type="text" id="country" name="country" placeholder="country...">
        <input type="text" id="hotel" name="hotel" placeholder="hotel...">
    </div>
    <div class="three">
        <label for="checkin">Check-in</label>
        <input type="date" id="checkin" name="checkin">
    </div>
    <div class="four">
        <label for="checkout">Check-out</label>
        <input type="date" id="checkout" name="checkout">
    </div>
    <div class="five">
        <label for="adult">Adult</label>
        <select id="adult" name="adult">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2" selected>2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="children">Children</label>
        <select id="children" name="children">
            <option value="0" selected>0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="rooms">Rooms</label>
        <select id="rooms" name="rooms">
            <option value="0">0</option>
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>
    <textarea name="message" id="message" cols="30" rows="10" placeholder="message..."></textarea>
    <input type="submit" value="SUBMIT" id="submit">
</form>
</section>`;

var aboutContent = `<section class="about">
<div class="about-top-section">
    <p class="head1">about:</p><br/>
    <p class="para1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
</div>
<div class="about-bottom-section">
    <p class="head2">client quotes:</p>
    <div class="client">
        <div class="client-image client1"></div>
        <div class="client-quote">
        <p class="para2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <div class="client-name">- Miranda Brown</div>
        </div>
    </div>
    <div class="client">
        <div class="client-image client2"></div>
        <div class="client-quote">
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <div class="client-name">- Johnathan Wes</div>
        </div>
    </div>
</div>
</section>`;

var toursContent = `<section class="tour">
<header>
    <!--span tags are only for styling font, you can't set a height and width for them-->
    <span>tours:</span>
</header>
<div class="tours">
    <div class="tourPromo israel">
        <p><span class="country">Israel</span><br/>
        <span class="cost">FROM $1000</span></p>
        <a id="israel" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo usa">
        <p><span class="country">U.S.A.</span><br/>
        <span class="cost">FROM $1500</span></p>
        <a id="usa" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo australia">
        <p><span class="country">Australia</span><br/>
        <span class="cost">FROM $1800</span></p>
        <a id="australia" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo newZealand">
        <p><span class="country">New Zealand</span><br/>
        <span class="cost">FROM $1200</span></p>
        <a id="newZealand" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo france">
        <p><span class="country">France</span><br/>
        <span class="cost">FROM $2500</span></p>
        <a id="france" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo egypt">
        <p><span class="country">Egypt</span><br/>
        <span class="cost">FROM $900</span></p>
        <a id="egypt" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo japan">
        <p><span class="country">Japan</span><br/>
        <span class="cost">FROM $1300</span></p>
        <a id="japan" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo canada">
        <p><span class="country">Canada</span><br/>
        <span class="cost">FROM $2000</span></p>
        <a id="canada" href="#"><button>LEARN MORE</button></a>
    </div>
    <div class="tourPromo uae">
        <p><span class="country">U.A.E.</span><br/>
        <span class="cost">FROM $3000</span></p>
        <a id="uae" href="#"><button>LEARN MORE</button></a>
    </div>
</div>
</section>`;

var specialOffersContent = `<section class="special">
<p class="head1">special offer(s):</p>
<div class="offer">
    <div class="imgLeft spain"></div>
    <div class="textRight">
        <div class="top">
            <p class="head2">barcelona, spain</p>
            <p class="price">(20% off!)</p>
        </div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <button>LEARN MORE</button>
    </div>
</div>
<div class="offer">
    <div class="imgLeft thailand"></div>
    <div class="textRight">
        <div class="top">
            <p class="head3">bangkok, thailand</p>
            <p class="price">(10% off!)</p>
        </div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        <button>LEARN MORE</button>
    </div>
</div>
</section>`;

var blogContent = `<section class="blog">
<p class="head">blog:</p>
<div class="date">
    <div class="blue-box">
        <p class="num">06</p>
        <p class="mo">JUN</p>
    </div>
    <div class="right">
        <div class="banner"></div>
        <p class="title">Sed et persipiatis unde omnis iste natus</p>
        <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
</div>
<div class="date">
    <div class="blue-box">
        <p class="num">23</p>
        <p class="mo">JUL</p>
    </div>
    <div class="right">
        <div class="banner"></div>
        <p class="title">Sed et persipiatis unde omnis iste natus</p>
        <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
</div>
</section>`;

var contactContent = `<section class="contact">
<p class="head">contact us:</p>
<div class="contain">
    <div class="left">
        <div class="map"></div>
        <p>travel-fly Inc.<br/>
            8901 Marmor a Road,<br/>
            Glasgow, D04 89GR.<br/>
            Freephone:+1 800 559 6580<br/>
            Telephone:+1 800 603 6035<br/>
            FAX:+1 800 889 9898<br/>
            E-mail: mail@travelfly.org</p>
    </div>
    <div class="right">
        <form>
            <input type="text" id="name" name="name" placeholder="Your name...">
            <input type="email" id="email" name="email" placeholder="Email Address...">
            <input type="text" id="company" name="company" placeholder="Company...">
            <textarea name="message" id="message" cols="30" rows="9" placeholder="Message..."></textarea>
            <input type="submit" value="SEND MESSAGE" id="submit">
        </form>
    </div>
</div>
</section>`;

var israelContent = `<section class="tour-page">
<header class="israel">
    <p class="top">Israel tour package:</p><br/>
    <p class="bottom">STARTING FROM $1000 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo israel1"></div>
    <div class="promo israel2"></div>
    <div class="promo israel3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var usaContent = `<section class="tour-page">
<header class="usa">
    <p class="top">U.S.A. tour package:</p><br/>
    <p class="bottom">STARTING FROM $1500 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo usa1"></div>
    <div class="promo usa2"></div>
    <div class="promo usa3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var australiaContent = `<section class="tour-page">
<header class="australia">
    <p class="top">Australia tour package:</p><br/>
    <p class="bottom">STARTING FROM $1800 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo australia1"></div>
    <div class="promo australia2"></div>
    <div class="promo australia3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var newZealandContent = `<section class="tour-page">
<header class="zealand">
    <p class="top">New Zealand tour package:</p><br/>
    <p class="bottom">STARTING FROM $1200 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo zealand1"></div>
    <div class="promo zealand2"></div>
    <div class="promo zealand3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var franceContent = `<section class="tour-page">
<header class="france">
    <p class="top">France tour package:</p><br/>
    <p class="bottom">STARTING FROM $2500 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo france1"></div>
    <div class="promo france2"></div>
    <div class="promo france3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var egyptContent = `<section class="tour-page">
<header class="egypt">
    <p class="top">Egypt tour package:</p><br/>
    <p class="bottom">STARTING FROM $900 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo egypt1"></div>
    <div class="promo egypt2"></div>
    <div class="promo egypt3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var japanContent = ` <section class="tour-page">
<header class="japan">
    <p class="top">Japan tour package:</p><br/>
    <p class="bottom">STARTING FROM $1300 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo japan1"></div>
    <div class="promo japan2"></div>
    <div class="promo japan3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var canadaContent = `<section class="tour-page">
<header class="canada">
    <p class="top">Canada tour package:</p><br/>
    <p class="bottom">STARTING FROM $2000 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo canada1"></div>
    <div class="promo canada2"></div>
    <div class="promo canada3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

var uaeContent = `<section class="tour-page">
<header class="uae">
    <p class="top">U.A.E. tour package:</p><br/>
    <p class="bottom">STARTING FROM $3000 (prices may vary)</p>
</header>
<div class="pics">
    <div class="promo uae1"></div>
    <div class="promo uae2"></div>
    <div class="promo uae3"></div>
</div>
<div class="text">
    <p class="day">Day #1:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #2:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p class="day">Day #3:</p>
    <p class="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    <button>BOOK NOW</button>
</div>
</section>`;

export function getPageContent(pageId) {
    //getting the element with the id="app"
    //changes the text in that div to the button's id that was clicked
    //this changes the string in the contentId into reading it as variable
    $("#app").html(eval(pageId));
};