fetch('https://roudy.herokuapp.com/data')
  .then(response => response.json())
  .then(json => {
      var RH = document.getElementById('RH');
      var OriginalContent = `<div>
            <div class="icon"><i class="MANGALA"></i></div>
            <h4 class="title"><a href="">FADY</a></h4>
            <p class="description">CHRIST</p>
          </div>`;
      for(var i=0;i<json.length;i++)
      {
          var MyContent = document.createElement('div');
          var CustomisedContent = OriginalContent;
          CustomisedContent = CustomisedContent.replace('FADY',json[i].title);
          CustomisedContent = CustomisedContent.replace('CHRIST',json[i].description);
          CustomisedContent = CustomisedContent.replace('MANGALA',json[i].icon);
          MyContent.className='col-lg-4 col-md-6 icon-box'
          MyContent.innerHTML = CustomisedContent;
          RH.appendChild(MyContent);
      }
  })


fetch('https://roudy.herokuapp.com/Services')
  .then(response => response.json())
  .then(json => {
      var UE = document.getElementById('UE');
      var OriginalContent = `<div>
      <div class="icon"><i class="Hello"></i></div>
      <h4 class="title"><a href="">Hey</a></h4>
      <p class="description">Hi</p>
    </div>`;
    for(var i=0;i<json.length;i++)
    {
        var MyContent = document.createElement('div');
        var CustomisedContent = OriginalContent;
        CustomisedContent = CustomisedContent.replace('Hello',json[i].title);
        CustomisedContent = CustomisedContent.replace('Hey',json[i].description);
        CustomisedContent = CustomisedContent.replace('Hi',json[i].icon);
        MyContent.className = 'd-flex align-items-stretch'
        MyContent.innerHTML = CustomisedContent;
        UE.appendChild(MyContent);
    }
  })