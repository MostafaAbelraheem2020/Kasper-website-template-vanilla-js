//===================================================
//==== randomly change imgs تغير الصور عشوائيا ====
//===================================================

// select the element want to change it`s img  اختيار العنصر المراد تغير الصور بداخلة
let landingImge = document.querySelector('.landing-main')
// create array of imgs عمل مصفوفة للصور
let imgArray = ['02.jpeg', '01.jpg', '03.jpeg', '04.jpeg', '05.jpeg']
// صناعة قرار البقاء على الصورة الافتراضية او تشغير خاصية التغير المؤقت للصور
//عمل متغير القيمة الافتراضية
let backgroundOption = true

// سحب زاكرة الموقع وعمل فحص نوع القرار الموجود بالزاكرة لعمل تحديث لقيمة المتغير
let backgroundlocalItem = localStorage.getItem('background-option')
if (backgroundlocalItem !== null) {
  console.log(backgroundlocalItem)

  if (backgroundlocalItem === 'true') {
    backgroundOption = true
  } else {
    backgroundOption = false
  }
}
// make a iterval function عمل خاصية تكرار تشغيل مؤقت
//عمل تصريح فاريبل لخاصية الانترفال
let imgseinterval
let swicheimg = function () {
  if (backgroundOption === true) {
    imgseinterval = setInterval(() => {
      //create a random Number   انشاء رقم عشوائي لعدد الصور في المصفوفة
      let randomNumber = Math.floor(Math.random() * imgArray.length)
      // styling the element with backgrounds وضع الصور داخل العنصر المحدد مسبقا
      landingImge.style.backgroundImage =
        'url(../images/' + imgArray[randomNumber] + ')'
    }, 1000)
  }
}

//   التصريح بتشغيل الخاصية اذا توافقة الشروط سيتم تشغيلها افتراضيا اول مرة عمل للتطبيق
//======== يجب التصريح بالخاصية بعد قيام فحص الزاكرة بعمله حتى يتم تطبيق شروط الفحص
swicheimg()
//
//=== تحديد زرار لاعطاء خيار تغير الخلفيات او البقاء على الراندوم ===

//===حزف الكلاس اكتف واضافة على العنصر عند الضغط عليه===
//

// اختيار كافة سلسلة العناصر التي توجد بها ازرار الاختيار
let randomBackground = document.querySelectorAll('.rBackContent span')
// عمل لوب على كل الازرار لازالة كلاس اكتيف واضافة للعنصر عند الضغط علية
randomBackground.forEach(e => {
  // عمل حدث لكل عنصر من الازرار عند الضغط عليه
  e.addEventListener('click', l => {
    l.target.parentElement.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active')
    })
    // اضافة كلاس اكتيف للعنصر عند الضغط عليه
    l.target.classList.add('active')
    // عمل فحص لحالة المعلومات الموجودة بالزرار الذي تم الضغط عليه
    // عند الضغط يتم تحديث بيانات المتغير
    // وتشغيل دالة التغير التلقائي للصور او ايقافها
    // حسب القرار الموجود بالمعلومات الواردة بالزرار
    //ويتم عندها ارسال المعلومات للزاكرة لتحديث قيمة المتغير عند اعادة فتح التطبيق
    if (l.target.dataset.background === 'yes') {
      backgroundOption = true
      localStorage.setItem('background-option', true)
      swicheimg()
    } else {
      backgroundOption = false
      localStorage.setItem('background-option', false)
      clearInterval(imgseinterval)
    }
  })
  // هنا يتم ازالة كلاس اكتف من كل الازرار عن فتح التطبيق لاول مره
  //ثم يتم اضافة كلاس اكتيف للزار المختار فقط وارسال معلوماته للزاكرة
  e.classList.remove('active')
  if (backgroundlocalItem === 'true') {
    document.querySelector('.yes').classList.add('active')
  } else {
    document.querySelector('.no').classList.add('active')
  }
})

//===================================================
//====  setting box  تظبيط نافذة الاعدادات الافتراضية      ====
///===================================================

//
// get gear icon to js   جلب ايكونة الظبط (الجير ايكون)
let gearIcon = document.querySelector('.setting-box .fa-gear')
// get setting box to js   جلب عنصر الظبط (نافذة الظبط)
let settingBoxEl = document.querySelector('.setting-box')

// create event on gear icon to open box and make the icon spining
gearIcon.onclick = function () {
  // اضافة كلاس للعنصر عند الضغط وازالة عند الضغط مرة اخرى
  settingBoxEl.classList.toggle('open')
  // اضافة كلاس للعنصر عند الضغط وازالة عند الضغط مرة اخرى
  this.classList.toggle('fa-spin')
  localStorage.setItem('open-option', settingBoxEl.classList)
}

//===================================================
//=== color swicher تغير اللوان الموقع الرئيسية ===
//===================================================

//===================================================
//===حزف الكلاس اكتف واضافة على العنصر عند الضغط عليه===
//===================================================

// اختيار كافة سلسلة العناصر التي توجد بها الالوان
let colorslist = document.querySelectorAll('.color-list li')
// عمل لوب على كل عناصر سلسلة اللاوان
colorslist.forEach(e => {
  // عمل حدث لكل عنصر من السلسلة عند الضغط عليه
  e.addEventListener('click', l => {
    // تحديد الروت او البروبرتي الرئيسية الموجود بها اللون الرئيسي في css وتغيره
    // الى data-attribuetes الموجود في كل عنصر من خلال data set للعنصر المختار
    document.documentElement.style.setProperty(
      '--icon-color',
      l.target.dataset.color
    )
    localStorage.setItem('selected-color', l.target.dataset.color)
    // تحديد جميع العناصر التي تحتوي على كلاس اكتيف وازالتها
    // حتى يتم وضعه على العنصر صاحب اللون المختار
    l.target.parentElement.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active')
    })
    //تغير العنصر صاحب اللون المختار ووضع كلاس active عليه
    l.target.classList.add('active')
  })
})

//==================================================================================================
//= add selected option to localStorage اضافة الالوان والاعدادات المختارة للذاكرة الخاصة بالموقع==
//==================================================================================================
// اولا يتم اضافة عنصر ذاكرة محليه له القيمة المراد حفظها عند اعادة تحمي الصفحة
//  وضع عنصر الزاكرة المراد البحث عنه داخل متغير
let selectedColor = localStorage.getItem('selected-color')
let opendOption = localStorage.getItem('open-option')

//  عمل فحص من خلال الدالة الشرطية ف حيث ان العنصر بداخل الذاكرة ان لم يكن موجود مسبقا
// يتم تغير اعدادات العنصر المراد التطبيق عليه بقية المتغير الخاص بعنصر ذاكرة التخزين
if (selectedColor !== null) {
  document.documentElement.style.setProperty('--icon-color', selectedColor)
  // عمل لوب تقوم بحزف جميع الكلاس اكتيف من سلسلة الالوان ثم عمل دالة شرطية
  // تقوم بمقارنة لون العنصر في اللوب باللون المخزن في الزاكرة الداخلية للموقع وفي
  // حالة التوافق يتم اضافة كلاس اكتيف عليه
  document.querySelectorAll('.color-list li').forEach(el => {
    el.classList.remove('active')
    if (el.dataset.color === selectedColor) {
      el.classList.add('active')
    }
  })
}
if (opendOption === 'setting-box open') {
  settingBoxEl.classList.add('open')
}

//end setting box
