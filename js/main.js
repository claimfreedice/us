$(document).ready(function () {

  //Contact
  $(".contact").click(function () {
    swal({
      showConfirmButton: false,
      title: "Contact",
      html: '<form method="post" action="../contact.php"><input name="Name" type="text" placeholder="Name" maxlength="20" required><input name="Email" type="email" placeholder="Email" required><input name="Captcha" type="text" placeholder="Enter the first 2 digits of 2019" maxlength="2" required /><textarea name="Message" rows="4" placeholder="Enter your message..." required></textarea><button type="submit" name="submit" class="swal2-styled gray" />Send</button></form>',
    });
  });

  //Disable cut copy paste
  $('body').bind('cut copy paste', function (e) {
    e.preventDefault();
  });

  /*
	//Disable mouse right click
    $("body").on("contextmenu",function(e){
        return false;
    });
	*/

  $('.counter').counterUp({
    delay: 20,
    time: 5000
  });

  $(".btn-start").click(function () {
    $('.loading').show();
    $(".detecting").html('Detecting');
    $(function () {
      var count = 0;
      var wordsArray = ["Detecting", "Detecting .", "Detecting ..", "Detecting ...", "Detecting .", "Detecting ..", "DETECTED"];
      setInterval(function () {
        count++;
        $(".detecting").fadeOut(500, function () {
          $(this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
        });
      }, 1000);
    });
    setTimeout(function () {
      $('#connectbox').addClass('animated bounceOut 1s');
    }, 7000);
    setTimeout(function () {
      $('#connectbox').hide();
      $('#generatebox').show().addClass('animated bounceIn 1s');
    }, 8000);

  });

  $(".btn-generate").click(function () {
    var device = getMobileOperatingSystem();
    var coins = $('#coins').val();
    var points = $('#points').val();
    var console = '';
    var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255) + 0) + "." + (Math.floor(Math.random() * 255) + 0) + "." + (Math.floor(Math.random() * 255) + 0);
    var s = '<span class="username">[' + device + '@' + ip + ': ~] </span>';
    console += '#Console initialized<br>';
    console += s + 'Importing <span class="config">config.xml</span> file for editing<br>';
    console += s + '<span class="config">config.xml</span> file has been imported successfully<br>';
    console += s + 'Restoring <span class="resource">' + coins +
      '</span> <strong> ' + r1 + ' </strong> to device ID-***. ' + r1 + ' restored successfully<br>';
    if (r2 !== null && r2 !== '') {
      console += s + 'Restoring <span class="resource">' + points +
        '</span> <strong> ' + r2 + ' </strong> to device ID-***. ' + r2 + ' restored successfully<br>';
    } else {
      console += s + "...<br>";
    }
    console += s + 'Uploading temporary configuration file to main server<br>';
    console += s + "Update (0x61) uploading. progress: 96.98 (2996709959 / 3090085990)<br>";
    console += s + "Update (0x61) uploading. progress: 97.30 (3096709977 / 3190585696)<br>";
    console += s + 'Status: 100% completed... token matched!<br>';
    console += s + '<span class="verify-alert">Wating for user activation!</span>';
    if (coins !== '0') {
      setTimeout(function () {
        $('#generatebox').addClass('animated bounceOut 1s');
      }, 1000);
      setTimeout(function () {
        $('#generatebox').hide();
        $('#consolebox').show().addClass('animated bounceIn 1s');
        $('.consoleboximg').show();
        $(function () {
          var div = $('.element');
          setInterval(function () {
            var pos = div.scrollTop();
            div.scrollTop(pos + 2);
          }, 50);
          $(".element").typed({
            strings: [console],
            contentType: 'html',
            typeSpeed: -80,
            showCursor: false,
            callback: function () {
              setTimeout(function () {
                $('#consolebox').hide();
                $('#surveybox').show().addClass(
                  'animated bounceIn 1s');
              }, 1000);
              $('.proofcounter').html(coins);
            }
          });
        });
        setTimeout(function () {
          $(".proofh").removeClass("animated infinite flash");
          $('.proofcounter').html(coins);
          $('.proofcounter').counterUp({
            delay: 20,
            time: 15000
          });
        }, 10000);
      }, 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Choose your Subscription Level'
      })
    }
  });
  var feednames = ["133.5.0.89", "177.5.12.263", "155.74.12.89", "92.33.1.7", "150.8.64.65", "64.15.48.28", "101.69.33.2", "98.25.25.67", "127.8.6.96", "167.23.58.74", "106.36.41.2",
    "152.2.78.72", "107.36.89.4", "88.57.3.25", "75.68.30.21", "115.32.50.6", "65.38.17.20", "27.20.0.58", "245.20.3.0", "160.20.37.0", "144.20.38.91", "34.74.91.0", "125.20.35.60",
    "98.57.91.37", "96.44.31.80", "55.35.2.1", "210.28.95.0", "163.74.20.5"
  ];
  var feedcoins = ["20000 DICE ROLLS", "", "40000 DICE ROLLS", "40000 DICE ROLLS", "10000 DICE ROLLS"];
  var feedpoints = ["10000 DICE ROLLS", "20000 DICE ROLLS", "40000 DICE ROLLS", "10000 DICE ROLLS", "20000 DICE ROLLS"];
  $(".feed").fadeOut(200, function () {
    var itemfeednames = feednames[Math.floor(Math.random() * feednames.length)];
    var feed = '<span class="feednames">' + itemfeednames +
      '</span> unlocked <span class="feedvalues">30000 DICE ROLLS</span> ' + r1;
    $(this).html(feed).fadeIn(100);
  });
  setInterval(function () {
    $(".feed").fadeOut(2500, function () {
      var itemfeednames = feednames[Math.floor(Math.random() * feednames.length)];
      var itemfeedcoins = feedcoins[Math.floor(Math.random() * feedcoins.length)];
      var itemfeedpoints = feedpoints[Math.floor(Math.random() * feedpoints.length)];
      var r2feed = '';
      if (r2 !== null && r2 !== '') {
        var r2feed = '<span class="feedvalues"> ' + itemfeedpoints + ' </span>' + r2;
      }
      var feed = '<span class="feednames">' + itemfeednames + '</span> unlocked <span class="feedvalues"> ' +
        itemfeedcoins + ' </span>' + r1 + r2feed;
      $(this).html(feed).fadeIn(2500);
    });
  }, 15000);

});