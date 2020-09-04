$(".hamburger").on("click", ()=>{$(".overlay").toggleClass("h-100");$(".navbar").toggleClass("shadow");$(".hamburger span").toggleClass("fa-bars");$(".hamburger span").toggleClass("fa-times");$(".hamburger").toggleClass("unclickable");setTimeout(()=>{$(".hamburger").toggleClass("unclickable");},500);});var test = "Luglio 2020";	document.getElementById("calendar").innerHTML = "<div class=' swiper-container-h '><div id='wrapper' class=' swiper-wrapper'><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='lug_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Luglio 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>5</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='6_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>12</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='13_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>19</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='20_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>26</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='27_Lug_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Lug_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Lug2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='ago_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Agosto 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>2</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='3_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>9</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='10_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>16</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='17_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>23</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='24_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Ago_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>30</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='31_Ago_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ago2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='set_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Settembre 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>6</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='7_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>13</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='14_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>20</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='21_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>27</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='28_Set_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Set_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><div id='-_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Set2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='ott_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Ottobre 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>4</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='5_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>11</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='12_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>18</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='19_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>25</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='26_Ott_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Ott_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Ott2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='nov_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Novembre 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>1</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='2_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>8</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='9_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>15</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='16_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>22</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='23_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Nov_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>29</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='30_Nov_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>30</a><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Nov2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='dic_2020' class=' w-100 py-3 my-0 bg-dark text-light'>Dicembre 2020</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>6</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='7_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>13</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='14_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>20</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='21_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>27</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='28_Dic_2020' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Dic_2020' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Dic2020' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='gen_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Gennaio 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Gen2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>3</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='4_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>10</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='11_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>17</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='18_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>24</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='25_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Gen_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Gen_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>31</a></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='feb_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Febbraio 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Feb2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='1_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>7</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='8_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>14</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='15_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>21</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='22_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Feb_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Feb_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>28</a></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='mar_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Marzo 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='1_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>7</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='8_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>14</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='15_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>21</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='22_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>28</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='29_Mar_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Mar_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mar2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='apr_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Aprile 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>4</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='5_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>11</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='12_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>18</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='19_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>25</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='26_Apr_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Apr_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><div id='-_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Apr2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='mag_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Maggio 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>2</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='3_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>9</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='10_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>16</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='17_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>23</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='24_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Mag_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>30</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='31_Mag_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Mag2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='giu_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Giugno 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>4</a><a id='5_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>6</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='7_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>11</a><a id='12_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>13</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='14_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>18</a><a id='19_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>20</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='21_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>25</a><a id='26_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>27</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='28_Giu_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Giu_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><div id='-_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Giu2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div><div class=' swiper-slide bg-light'  style='height:100vh;'><div class='container pb-4 bg-dark mx-0 mt-5'><div class='row '><div class=' w-100 d-flex justify-content-between'><a class=' btn link ml-3 align-self-center text-light'><i class=' fa fa-chevron-left'  onclick='calendarPrev();'></i></a><h2 id='lug_2021' class=' w-100 py-3 my-0 bg-dark text-light'>Luglio 2021</h2><a class=' btn link mr-3 align-self-center text-light'><i class=' fa fa-chevron-right'  onclick='calendarNext();'></i></a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='LU_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>LU</div><div id='MA_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>MA</div><div id='ME_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>ME</div><div id='GI_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>GI</div><div id='VE_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>VE</div><div id='SA_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>SA</div><div id='DO_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>DO</div></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><div id='-_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><div id='-_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div><a id='1_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>1</a><a id='2_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>2</a><a id='3_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>3</a><a id='4_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>4</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='5_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>5</a><a id='6_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>6</a><a id='7_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>7</a><a id='8_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>8</a><a id='9_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>9</a><a id='10_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>10</a><a id='11_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>11</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='12_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>12</a><a id='13_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>13</a><a id='14_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>14</a><a id='15_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>15</a><a id='16_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>16</a><a id='17_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>17</a><a id='18_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>18</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='19_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>19</a><a id='20_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>20</a><a id='21_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>21</a><a id='22_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>22</a><a id='23_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>23</a><a id='24_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>24</a><a id='25_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>25</a></div></div><div class='row '><div class=' col-12 d-flex justify-content-between '><a id='26_Lug_2021' class=' p-2 w-100 text-center  bg-dark text-light'   style='box-shadow:0px 0px 0px 1px black inset'>26</a><a id='27_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>27</a><a id='28_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>28</a><a id='29_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>29</a><a id='30_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>30</a><a id='31_Lug_2021' class=' p-2 w-100 calday text-center  bg-light text-dark'  onclick='calendarClick(this.id);' style='box-shadow:0px 0px 0px 1px black inset'>31</a><div id='-_Lug2021' class=' p-2 w-100 text-center  bg-dark text-light'  style='box-shadow:0px 0px 0px 1px black inset'>-</div></div></div></div></div></div><div class=' swiper-pagination-h'></div><div class=' d-none swiper-button-prev'></div><div class=' d-none swiper-button-next'></div><a id='buttonDaySelected' class=' link btn btn-block text-light btn-dark'>Avanti<div id='calendarSpin' class=' spinner-border d-none'  role='status'><span class=' sr-only'>Loading...</span></div></a></div>";
firebaseConfig = {
apiKey: "AIzaSyAyPpwYB1X-e5VnUkUgJ2orPcDr9ybDHEU",
authDomain: "draggable-9f92b.firebaseapp.com",
databaseURL: "https://draggable-9f92b.firebaseio.com",
projectId: "draggable-9f92b",
storageBucket: "draggable-9f92b.appspot.com",
messagingSenderId: "1010593277055",
appId: "1:1010593277055:web:1b729dc7368b8f6f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log("firebase loaded");
const auth = firebase.auth();var d2 = new Date(), overwrite = "";function calendarPrev() { 
document.getElementsByClassName("swiper-button-prev")[0].click()

};
function calendarNext() { 
document.getElementsByClassName("swiper-button-next")[0].click()

};
function getCode() { 
var codes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
ncodes = ["0","1","2","3","4","5","6","7","8","9"],
mcodes = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
var sec = d2.getSeconds(), mon = d2.getMonth(), day = d2.getDate(),n1 = ncodes[Math.round(Math.random()*9)],
n2 = ncodes[Math.round(Math.random()*9)], n3 = codes[Math.round(Math.random()*25)], n4 = codes[Math.round(Math.random()*25)],
n5 = ncodes[Math.round(Math.random()*9)], n6 = mcodes.indexOf("Lug");
return n6+n1+n2+n3+n4+n5+ncodes[day]+sec;

};
const buttonNewRes = document.getElementById('buttonNewRes');const buttonGoEditRes = document.getElementById('buttonGoEditRes');const buttonConfirm = document.getElementById('buttonConfirm');const buttonDaySelected = document.getElementById('buttonDaySelected');const buttonCodeInserted = document.getElementById('buttonCodeInserted');const codeForm = document.getElementById('codeForm');const inputName = document.getElementById('inputName');const inputSurname = document.getElementById('inputSurname');const inputEmail = document.getElementById('inputEmail');const inputPhone = document.getElementById('inputPhone');const calNext = document.getElementById('calNext');const calPrev = document.getElementById('calPrev');const inputService = document.getElementById('inputService');var inputDay = "";var inputMonth = "";var inputYear = "";var daySelected = "";var data = {};var nameValidation = false;var surnameValidation = false;var emailValidation = false;var phoneValidation = false;var serviceValidation = false;var dayValidation = false;var monthValidation = false;var yearValidation = false;var previousSelDay;var filter = false;var bullets = ["Lug","Ago","Set","Ott","Nov","Dic","Gen","Feb","Mar","Apr","Mag","Giu"];var fullmonths = ["Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre","Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno"];firebase.auth().onAuthStateChanged(firebaseUser => {if (firebaseUser) {firebase.database().ref("db/aiello/waitinglist")
.once('value').then(function(snapshot) {
try {
data = snapshot.val();setTimeout(( ) => {
	document.getElementById("myTable").innerHTML = buildTable(data,["name","surname","phone","email","service","day","month","year","hour","minutes","status"]);

}, 2000);

} catch(err) {console.log("err dbRJ");
};});
console.log("logged in");} else {console.log("not logged in");			document.getElementById("mainContainer").innerHTML = "<div class=' swiper-slide'><div class='container '><div class=' card'><div class=' card-body text-center'><h5 class=' card-title mt-3 mb-5'>Sorry, not allowed to see this content</h5><a id='loginButton' class=' btn btn-dark text-light btn-block'  href='index.html'>Torna alla home</a></div></div></div></div>";

}});function resetForm() { 
document.getElementById("inputName").value = "";
document.getElementById("inputSurname").value = "";
document.getElementById("inputPhone").value = "";
document.getElementById("inputEmail").value = "";
document.getElementById("inputHour").value = "";
document.getElementById("inputMinutes").value = "";
document.getElementById("inputService").value = "";

};
function fillForm(ind) { 
eval("var name = data."+Object.keys(data)[ind]+".name;");
eval("var surname = data."+Object.keys(data)[ind]+".surname;");
eval("var phone = data."+Object.keys(data)[ind]+".phone;");
eval("var email = data."+Object.keys(data)[ind]+".email;");
eval("var hour = data."+Object.keys(data)[ind]+".hour;");
eval("var minutes = data."+Object.keys(data)[ind]+".minutes;");
eval("var service = data."+Object.keys(data)[ind]+".service;");
eval("overwrite = '"+Object.keys(data)[ind]+"';");
document.getElementById("inputName").value = name;
document.getElementById("inputSurname").value = surname;
document.getElementById("inputPhone").value = phone;
document.getElementById("inputEmail").value = email;
document.getElementById("inputHour").value = hour;
document.getElementById("inputMinutes").value = minutes;
document.getElementById("inputService").value = service;
bulletClick(15);

};
function buildTable(obj,order) { 
var dd = daySelected.split("_")[0];
var mm = daySelected.split("_")[1];
var yyyy = daySelected.split("_")[2];
document.getElementById("calTitle").innerHTML = dd+" "+fullmonths[bullets.indexOf(mm)]+" "+yyyy;
var keys = Object.keys(obj);
eval("var tit = order;");
titles="",items="";allitems="";
for (var i=0; i<tit.length;i++) {
	titles+="<th>"+tit[i]+"</th>";

}
for (var j=0; j<keys.length;j++) {
	eval("var keyz=Object.keys(obj."+keys[j]+");")
for (var k=0; k<keyz.length;k++) {
	var str1 = "", str2="", str3="", str4="", str5="";
str2 = 'obj.'+keys[j]+'.'+order[k]
eval('strDay = obj.'+keys[j]+'.day');
str5 = keys[j];
eval('strMon = obj.'+keys[j]+'.month');
eval('strYear = obj.'+keys[j]+'.year');
eval("var value = "+str2);
if(filter){
	document.getElementById("calTitle").innerHTML = dd+" "+fullmonths[bullets.indexOf(mm)]+" "+yyyy;
if(strDay == dd && strYear == yyyy && strMon == mm){
	switch (order[k]) {
case "status":
switch (value) {
case "wait":
str1 = 'items+="<td><button onclick=\'fillForm("+j+"); \'  class=\'btn btn-warning \'><i class=\'fa fa-clock "+'
str3 = '+"\'></i></button></td>";'
break;
default:
str1 = 'items+="<td><button class=\'btn btn-success \'><i class=\'fa fa-check "+'
str3 = '+"\'></i></button></td>";'
}
break;
default:
str1 = 'items+="<td>"+'
str3 = '+"</td>";'
} 

}

} else {
	document.getElementById("calTitle").innerHTML = "All";
switch (order[k]) {
case "status":
switch (value) {
case "wait":
str1 = 'items+="<td><button onclick=\'fillForm("+j+"); \'  class=\'btn btn-warning \'><i class=\'fa fa-clock "+'
str3 = '+"\'></i></button></td>";'
break;
default:
str1 = 'items+="<td><button class=\'btn btn-success \'><i class=\'fa fa-check "+'
str3 = '+"\'></i></button></td>";'
}
break;
default:
str1 = 'items+="<td>"+'
str3 = '+"</td>";'
} 

}
eval(str1+str2+str3);

}
allitems+="<tr>"+items+"</tr>";
items="";

}
return "<table class='table table-striped'><thead><tr>"+titles+"</tr></thead><tbody>"+allitems+"</tbody></table>";

};
var swiperH = new Swiper('.swiper-container-h', {cssMode:true,slidesPerView: 1,spaceBetween: 50,mousewheel: true,speed: 400,pagination: {el: '.swiper-pagination-h',clickable: true,}, navigation: {nextEl: '.swiper-button-next',prevEl: '.swiper-button-prev',},});var swiperV = new Swiper('.swiper-container-v', {cssMode:true,direction: 'vertical',slidesPerView: 1,spaceBetween: 50,speed: 400,pagination: {el: '.swiper-pagination-v',clickable: true,},});loadDay("5_Set_2020",100);calendarClick("5_Set_2020");function toggleCalTitle() { 
document.getElementById("myTable").innerHTML = '<div id="tableSpin" class=" spinner-border " role="status"><span class=" sr-only">Loading...</span></div>';
toggleFilter();
setTimeout(( ) => {
	document.getElementById("myTable").innerHTML = buildTable(data,["name","surname","phone","email","service","day","month","year","hour","minutes","status"]);

}, 1500);


};
calTitle.addEventListener('click', e => {

toggleCalTitle();
});

function togglecalPrev() { 
calendarClick(prev());
loadDay(prev(),10);

};
calPrev.addEventListener('click', e => {

togglecalPrev();
});

function toggleCalNext() { 
calendarClick(next());
loadDay(prev(),10);

};
calNext.addEventListener('click', e => {

toggleCalNext();
});

function next() { 
var months = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],
data=daySelected, day=data.split("_")[0], month=months[months.indexOf(data.split("_")[1])],  year=data.split("_")[2], 
dayToReturn  = "", lastday=calendar.theLastday(month,year);
if(day == lastday){
	if(month == "Dic"){
	year=JSON.parse(year)+1;
dayToReturn = "1_Gen_"+JSON.stringify(year);

} else {
	month=months[months.indexOf(data.split("_")[1])+1]
dayToReturn = 1 + "_"+month+"_"+year;

}

} else {
	day=JSON.parse(day)+1;
dayToReturn = JSON.stringify(day)+ "_"+month+"_"+year;

}
return dayToReturn;

};
function toggleFilter() { 
if(filter){
	filter = false;

} else {
	filter = true;

}

};
function prev() { 
var data = daySelected, months = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],day=data.split("_")[0], month=(data.split("_")[1]),  year=data.split("_")[2]; 
dayToReturn  = "", lastday=theLastday(month,year);
if(day == 1){
	if(month == "Gen"){
	year=JSON.parse(year)-1;
dayToReturn = "31_Dic_"+JSON.stringify(year);

} else {
	month=months[months.indexOf(data.split("_")[1])-1];
dayToReturn =  calendar.theLastday(month,year)+"_"+month+"_"+year;

}

} else {
	day=JSON.parse(day)-1;
dayToReturn = JSON.stringify(day)+ "_"+month+"_"+year;

}
return dayToReturn;

};
function theLastday(month,year) { 
var lastday;
if(['Gen','Mar','Mag','Lug','Ago','Ott','Dic'].includes(month.slice(0,3))){
	lastday = 31;

} else if(month.slice(0,3)=="Feb"){
	if(['2020','2024','2028','2032','2036','2040','2044','2048','2052','2056','2060'].includes(year)){
	lastday = 29;

} else {
	lastday = 28;

}

} else {
	lastday = 30;

}
return lastday;

};
function toggleGoData() { 
verifyValidation(2);

};
buttonGoData.addEventListener('click', e => {

toggleGoData();
});

function toggleDaySelected() { 
verifyValidation(3);

};
buttonDaySelected.addEventListener('click', e => {

toggleDaySelected();
});

function toggleGoHour() { 
verifyValidation(4);

};
buttonHourSelected.addEventListener('click', e => {

toggleGoHour();
});

function toggleConfirmRes() { 
verifyValidation(5);

};
buttonConfirm.addEventListener('click', e => {

toggleConfirmRes();
});

function bulletClick(bul) { 
document.getElementsByClassName("swiper-pagination-bullet")[bul].click();

};
function loadDay(day,wait) { 
var month = day.split("_")[1];
var year = day.split("_")[2];
var day = day.split("_")[0];
switch (month) {
case "Lug":
break;
case "Ago":
bulletClick(bullets.indexOf("Ago"));
break;
case "Set":
bulletClick(bullets.indexOf("Set"));
break;
case "Ott":
bulletClick(bullets.indexOf("Ott"));
break;
}
setTimeout(( ) => {
	document.getElementById("buttonDaySelected").click();

}, wait);


};
function validateInput(theInput,type) { 
switch (type) {
case "code":
if(theInput.value=='' ){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
return true

}
break;
case "string":
if(theInput.value=='' ){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	if(theInput.value.indexOf('0')>=0 || theInput.value.indexOf('1')>=0 || theInput.value.indexOf('2')>=0 || theInput.value.indexOf('3')>=0 || theInput.value.indexOf('4')>=0 || theInput.value.indexOf('5')>=0 || theInput.value.indexOf('6')>=0 || theInput.value.indexOf('7')>=0 || theInput.value.indexOf('8')>=0 || theInput.value.indexOf('9')>=0 || theInput.value.indexOf('"')>=0 || theInput.value.indexOf("'")>=0 || theInput.value.indexOf('(')>=0 || theInput.value.indexOf(')')>=0 || theInput.value.indexOf('[')>=0 || theInput.value.indexOf(']')>=0 || theInput.value.indexOf('%')>=0 || theInput.value.indexOf('$')>=0 || theInput.value.indexOf('!')>=0 || theInput.value.indexOf(',')>=0 || theInput.value.indexOf('.')>=0 || theInput.value.indexOf('?')>=0 || theInput.value.indexOf('=')>=0 || theInput.value.indexOf('*')>=0 || theInput.value.indexOf('#')>=0 || theInput.value.indexOf('@')>=0 ){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
var items=theInput.value.split(" "),str="";
for (var item=0; item<items.length;item++) {
	if (item!=0) {str+=" "};
str+=items[item][0].toUpperCase()+items[item].slice(1,items[item].length);

}
theInput.value=str;
theInput.setAttribute("valid","true");
return true

}

}
break;
case "email":
if(theInput.value=='' ){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	if(theInput.value.indexOf('@')<0 || theInput.value.split('@')[1].split('.')[1]!='com'&& theInput.value.split('@')[1].split('.')[1]!='it'){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
theInput.value=theInput.value.toLowerCase();
return true

}

}
break;
case "phone":
if(theInput.value=='' ){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	if(theInput.value.length!=10 || theInput.value[0]!='3'){
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById(theInput.id).nextSibling.nextSibling.classList.toggle("d-none");

}, 1500);

theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
return true

}
theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
return true

}
break;
}
if(theInput.value=='' ){
	theInput.style.border="3px solid red";
theInput.removeAttribute("valid");
return false

} else {
	theInput.style.border="1px solid #ced4da";
theInput.setAttribute("valid","true");
return true

}

};
function calendarClick(day) { 
daySelected = day;
inputDay = day.split("_")[0];
inputMonth = day.split("_")[1];
inputYear = day.split("_")[2];
if(previousSelDay){
	document.getElementById(previousSelDay).classList.toggle("bg-warning");document.getElementById(previousSelDay).classList.toggle("bg-light");

}
document.getElementById(day).classList.toggle("bg-warning");document.getElementById(day).classList.toggle("bg-light");
previousSelDay = day;
buttonDaySelected.classList.remove("disabled");

};
function dataWriteValidate(inputData) { 
var dataSplitted = inputData.split(" ");
if (dataSplitted.length>1) {
var splittedData="";
for (var split in dataSplitted) {
if (split!=0) {splittedData += "_"};
splittedData += dataSplitted[split];
}
}
 if (splittedData) { return splittedData; } else { return inputData; }

};
function verifyValidation(section) { 
switch (section) {
case 1:
if(buttonEditRes.classList.contains("focus")){
	
} else {
	location.href = "#section1";

}
break;
case 2:
nameValidation= validateInput(inputName,"string");
surnameValidation= validateInput(inputSurname,"string");
emailValidation= validateInput(inputEmail,"email");
phoneValidation= validateInput(inputPhone,"phone");
if(nameValidation && surnameValidation && emailValidation && phoneValidation){
	document.getElementById("dataSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("dataSpin").classList.toggle("d-none");
bulletClick(16);

}, 500);


}
break;
case 3:
document.getElementById("myTable").innerHTML = '<div id="tableSpin" class=" spinner-border " role="status"><span class=" sr-only">Loading...</span></div>';
document.getElementById("calendarSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("myTable").innerHTML = buildTable(data,["name","surname","phone","email","service","day","month","year","hour","minutes","status"]);
document.getElementById("calendarSpin").classList.toggle("d-none");
resetForm();
bulletClick(14);

}, 1500);

break;
case 4:
document.getElementById("hourSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("hourSpin").classList.toggle("d-none");
bulletClick(17);

}, 500);

	document.getElementById("riepilogo").innerHTML = "<div class='container '><h5 class=' mb-4 card-title text-center'>Riepilogo Prenotazione</h5><p class=' card-text text-left'>Nome: "+inputName.value+"</p><p class=' card-text text-left'>Cognome: "+inputSurname.value+"</p><p class=' card-text text-left'>Data appuntamento: "+inputDay+"/"+inputMonth+"/"+inputYear+"</p><p class=' card-text text-left'>Orario appuntamento: "+inputHour.value+":"+inputMinutes.value+"</p><p class=' card-text text-left'>Servizio richiesto: "+inputService.value+"</p></div>";

break;
case 5:
if (nameValidation && surnameValidation && phoneValidation && emailValidation ) {
document.getElementById("confirmSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("confirmSpin").classList.toggle("d-none");
console.log(overwrite);
console.log(inputService.value);
console.log(inputName.value);
console.log(inputSurname.value);
console.log(inputPhone.value);
console.log(inputEmail.value);
console.log(inputHour.value);
console.log(inputMinutes.value);
console.log(inputDay);
console.log(inputYear);
firebase.database().ref("db/aiello/waitinglist/"+overwrite).set({"service": inputService.value,"name": inputName.value,"surname": inputSurname.value,"phone": inputPhone.value,"email": inputEmail.value,"hour": inputHour.value,"minutes": inputMinutes.value,"status": "confirmed","day": inputDay,"month": inputMonth,"year": inputYear,});
firebase.database().ref("db/aiello/public/"+overwrite).set({"service": inputService.value,"name": inputName.value,"surname": inputSurname.value.slice(0,1),"hour": inputHour.value,"minutes": inputMinutes.value,"status": "confirmed","day": inputDay,"month": inputMonth,"year": inputYear,});
document.getElementById("confirmSpin").classList.toggle("d-none");
document.getElementById("buttonConfirm").classList.add("disabled");
document.getElementById("buttonConfirm").innerHTML = "Fatto!";

}, 500);

} else {
document.getElementById("riepilogo").parentNode.style.border = "3px solid red";
};
break;
case 6:
codeValidation= validateInput(inputCode,"code");
if(codeValidation){
	document.getElementById("codeSpin").classList.toggle("d-none");
setTimeout(( ) => {
	document.getElementById("codeSpin").classList.toggle("d-none");
bulletClick(14);

}, 500);


}
break;
}

};
