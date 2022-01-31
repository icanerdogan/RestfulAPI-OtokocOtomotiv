
<h1 align="center"> RestfulAPI for Otokoç Otomotiv </h1>

<p align="center">
  <img src="https://raw.githubusercontent.com/icanerdogan/RestfulAPI-OtokocOtomotiv/master/images/logo.png">
</p>

 <h2>İçindekiler</h2>
 <ul>
     <li><a href="#kutuphaneler"> Kullanılan Kütüpahaneler </a></li>
     <li><a href="#api-istekleri"> API İstekleri </a></li>
        <ul>
          <li><a href="#get-api"> GET </a></li>
          <ul>
            <li><a href="#pagination-api"> GET - Pagination   </a></li>
            <li><a href="#all-api"> GET - All   </a></li>
            <li><a href="#one-api"> GET - One </a></li>
          </ul>
          <li><a href="#post-api"> POST  </a></li>
          <li><a href="#delete-api"> DELETE  </a></li>
          <li><a href="#put-api"> PUT  </a></li>
        </ul>
 </ul>

<hr>
 
<h2 id="kutuphaneler">Kullanılan Kütüphaneler </h2>

```
// Express.js
npm i express
// dotenv
npm install dotenv --save
// body-parser
npm install body-parser
// mongoose
npm install mongoose
// nodemon
npm install -g nodemon
npm install --save-dev nodemon
```

<h2 id="api-istekleri">API İstekleri </h2>
<!-- **************************************************************************************************************************************************************** -->

<h3 id="get-api">GET </h3>

<h4 id="pagination-api">GET - Pagination </h4>
<p>Veriler istenilen sayfa ve limit ile sınırlandırılarak bölünebilir!</p>

<b>
  
```
http://localhost:8000/cars?page=2&limit=3
```
</b>
<p>Yukarı gördüğünüz istek Url'ye yapıldığında veriler her sayfada üçlü halde getirlir ve bulunduğumuz sayfa 2 olarak belirlenmiştir!</p>
<img src="https://raw.githubusercontent.com/icanerdogan/RestfulAPI-OtokocOtomotiv/master/images/GET-%20Pagination%20-%201.png">
<p>Veriler çekildiğinde bizlere "next" altında sonraki sayfaya ait, "previous" kısmında ise önceki sayfaya ait veriler gösterilir. "result" altında bulunan veriler o sayfada listelenen verilerdir!</p>
<img src="https://raw.githubusercontent.com/icanerdogan/RestfulAPI-OtokocOtomotiv/master/images/GET-%20Pagination%20-%202.png">
 <!-- **************************************************************************************************************************************************************** -->
<h4 id="all-api">GET - All </h4>
<p>Tüm eklenen yedek parça verileri aynı anda görüntülenebilir!</p>

<b>
  
```
http://localhost:8000/cars/all
```
</b>
<p>Yukarıda verilen istekte "all" eklenmesi ile tüm verilerin çekilmesi istenmektedir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/GET-%20All%20-%201.png">
<p>Tüm veriler JSON veri tipinde eklendiği sırada görüldüğü gibi gelir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/GET-%20All%20-%202.png">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="one-api">GET - One </h3>
<p>İstenilen parça numarasına (ID) göre verimizi elde etmek için kullanılır!</p>

<b>
  
```
http://localhost:8000/cars/61f784c833bc6e663b55af88
```
</b>
<p>Yukarıda verilen istekte görüntülenmesi istenen parçanın, parça numarası (ID) değeri eklenmesi ile ilgili verilerin çekilmesi istenmektedir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/GET-%20One%20-%201.png">
<p>Tek bir parçaya ait veriler görüldüğü gibi getirilir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/GET-%20One%20-%202.png">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="post-api">POST </h3>
<p>Yeni parçaları dinamik olarak verilerimiz içine ekleyebiliyoruz!</p>

<p>Body kısmına JSON formatında eklenmesi istenen değerler görüldüğü şekilde eklenir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/POST%20-%201.png">
<p>Görüldüğü gibi otomatik olarak yeni veri eklenmiş oluyor ve diğer parçalardan ayrılması için ona özel bir parça numarası (ID) otomatik olarak atanıyor!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/POST%20-%202.png">
<p>Tüm datalar çekildiğinde de yapılan isteğin dönüşünü görüyoruz!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/POST%20-%203.png">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="delete-api">DELETE </h3>
<p>Verilerimiz arasından eklediğimiz veriyi Parça numarasına(ID) göre silebiliriz!</p>

<p>DELETE işlemi için gerekli olan parça numarası isteğimize eklediğimizde, ilgili parça numarası eklenen veriler arasında varsa silinecek verimizi bulur!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/DELETE%20-%201.png">
<p>Verilerin silindiğine dair mesajımızı JSON veri tipinde veriyor!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/DELETE%20-%202.png">
<p>Silinen parça, tüm verilerin içinden silindiği aşağıdaki gibi görülmüştür!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/DELETE%20-%203.png">
 <!-- **************************************************************************************************************************************************************** -->
<h3 id="put-api">PUT </h3>
<p>Değiştirmek istediğim verimizi ID ile kolaylıkla değiştirebilir!</p>

<p>Değiştirilmesi istenilen parça numarası, isteğimizin sonuna eklenir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/PATCH%20-%201.png">
<p>Verilerimizde istenilen değişiklikler örnek olarak aşağıda görüldüğü gibi yapılmıştır!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/PATCH%20-%202.png">
<p>Tüm verilerimizden kontrol ettiğimizde ilgili parça numaramıza ait verilerde istenilen değişiklikler gerçekleşmiştir!</p>
<img src="https://github.com/icanerdogan/RestfulAPI-OtokocOtomotiv/blob/master/images/PATCH%20-%203.png">

