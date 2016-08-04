var branchHistory = []; // for storing history

// gather querystring params
var params = document.location.search.substr(1).split('&');
if(params[0] != ''){ loadData(params[0]); }

setActive();

// handle branch link clicks
$('.tree').on('click', 'li li a', function(e){
  e.preventDefault();
  targetBranch = $(e.target).attr('href');
  branchHistory.push('#'+$('.tree li.active').attr('id'));
  $('.tree li.active').removeClass('active').addClass('previous');
  $(targetBranch).addClass('active');
  addBackTo(targetBranch);
});

// handle back link clicks
$('.tree').on('click', 'a.back-branch', function(e){
  e.preventDefault();
  $('.tree li.active').removeClass('active')
  targetBranch = branchHistory.pop();
  $(targetBranch).removeClass('previous').addClass('active');
  addBackTo(targetBranch);
});

// add the back link to the active branch
function addBackTo(targetBranch){
  $('a.back-branch').remove();
  if(branchHistory.length > 0){
    $(targetBranch).append(
      '<a href="#" class="back-branch">&laquo; back</a>'
    );
  }
}

// jump to specified branch, if provided
function setActive(){
  if(params.length > 1){
    $('#'+params[1]).addClass('active');
  }else{
    $('.tree>li:first-child').addClass('active');
  }
}

// load XML data
function loadData(id){
  $.ajax({
    type: "GET", 
    url: "xml/tree" + id + ".xml", 
    dataType: "xml", 
    success: function(xml){
      buildHTML(xml);
    }
  });
}

// construct HTML from XML (likely can be simplfied)
function buildHTML(xml){
  $('.tree').empty();
  $(xml).find('branch').each(
    function(){
      branchID = dasherize($(this).attr('id'));
      $('.tree').append(
        '<li id="branch-'+branchID+'">'
          +'<p>'+$(this).find('content').html()+'</p>'
        +'</li>'
      );
      if($(this).find('fork').length > 0){
        html = '<ul>';
        $(this).find('fork').each(
          function(){
            targetID = dasherize($(this).attr('target'));
            html += '<li><a href="#branch-'+targetID+'">';
            html += $(this).text();
            html += '</a></li>';
          }
        );
        html += '</ul>';
        $('#branch-'+branchID).append(html);
      }
    }
  );
  setActive();
}

// helper to remove dots from branchIDs so jQuery doesn't try to be too clever
function dasherize(str){
  return str.replace(/\.+/g,'-');
}