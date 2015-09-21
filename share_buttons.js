$(function() {
  var share = {
    
    text : _lang.Share,

    buttons : {
      /* DEFAULT SHARE BUTTONS */
      fb : {
        enable : true,
        title : 'Share on Facebook'
      },
      
      twitter : {
        enable : true,
        title : 'Share on Twitter'
      },
      
      gp : {
        enable : true,
        title : 'Share on Google Plus'
      },
      
      mail : {
        enable : true,
        title : 'E-mail this page to someone'
      },
      
      rss : {
        enable : true,
        title : 'View this forum\'s RSS feed'
      },

      /* START CUSTOM SHARE BUTTONS */
      
      /* extra share buttons */
      pinterest : {
        enable : true,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/60/73/pinter10.png" />',
        title : 'Share on Pinterest',
        
        onclick : function(e) {
          var media = prompt('You\'re about to pin this page. Share an image ?');
          
          if (media == null) return false;
          else if (media == '') media = $('meta[property="og:image"]').attr('content') || '';
          
          window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(window.location.href) + (media ? '&media=' + encodeURIComponent(media) : '') + '&description=' + encodeURIComponent(document.title), '', 'menubar=no,status=no,scrollbars=no,width=800,height=600');
          e.preventDefault();
        }
      },
      
      tumblr : {
        enable : true,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/41/30/tumblr11.png" />',
        title : 'Share on Tumblr',
        
        onclick : function(e) {
          window.open('http://www.tumblr.com/share/link?url=' + encodeURIComponent(window.location.href), '', 'menubar=no,status=no,scrollbars=no,width=800,height=600');
          e.preventDefault();
        }
      },
      
      reddit : {
        enable : true,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/41/30/reddit10.png" />',
        title : 'Share on Reddit',
        
        onclick : function(e) {
          window.open('http://www.reddit.com/submit?url=' + encodeURIComponent(window.location.href) + '&title=' + encodeURIComponent(document.title), '', 'menubar=no,status=no,scrollbars=no,width=800,height=600');
          e.preventDefault();
        }
      },
      
      /* misc buttons */
      print : {
        enable : false,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/60/73/print11.png" />',
        title : 'Print this page',
        
        onclick : function(e) {
          window.print();
          e.preventDefault();
        }
      },
      
      copy_url : {
        enable : false,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/41/30/link10.png" />',
        title : 'Copy BBCode URL',
        
        onclick : function(e) {
          prompt('Copy the BBCode URL of this page ?', '[url=' + window.location.href + ']' + document.title + '[/url]');
          e.preventDefault();
        }
      },
      
      top : {
        enable : false,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/41/30/top10.png" />',
        title : 'Top of the page',
        href : '#top'
      },
      
      bottom : {
        enable : false,
        innerHTML : '<img src="http://i21.servimg.com/u/f21/18/21/41/30/bottom11.png" />',
        title : 'Bottom of the page',
        href : '#bottom'
      }
      /* END CUSTOM SHARE BUTTONS*/
    }
  },

  newList = document.createElement('SPAN'),
  fa_share,
  fa_share_text,
  existingNode,
  newNode,
  i, k;

  $(function() {
    fa_share = document.getElementById('fa_share');
    fa_share_text = document.getElementById('fa_share_text');
    if (!fa_share) return;
    
    // apply new share text
    if (fa_share_text) fa_share_text.innerHTML = share.text + ' : ';

    // redefine share buttons
    for (i in share.buttons) {
      existingNode = document.getElementById('fa_' + i);

      // modify exisiting share buttons
      if (existingNode) {
        if (share.buttons[i].enable) {
          for (k in share.buttons[i]) if (k != 'enable') existingNode[k] = share.buttons[i][k];
          newList.appendChild(existingNode);
        }
        else existingNode.parentNode.removeChild(existingNode);
      }
      
      // create a new share button
      else if (share.buttons[i].enable) {
        newNode = document.createElement('A');
        newNode.id = 'fa_' + i;
        
        for (k in share.buttons[i]) if (k != 'enable') newNode[k] = share.buttons[i][k];
        if (!newNode.href) newNode.href = '#';
        
        newList.appendChild(newNode);
      }

    }

    fa_share.appendChild(newList);
  });
});
