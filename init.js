Image.prototype.load = function( url, callback ) {
    var thisImg = this,
        xmlHTTP = new XMLHttpRequest();

    thisImg.completedPercentage = 0;

    xmlHTTP.open( 'GET', url , true );
    xmlHTTP.responseType = 'arraybuffer';

    xmlHTTP.onload = function( e ) {
        var h = xmlHTTP.getAllResponseHeaders(),
            m = h.match( /^Content-Type\:\s*(.*?)$/mi ),
            mimeType = m[ 1 ] || 'image/png';
            // Remove your progress bar or whatever here. Load is done.

        var blob = new Blob( [ this.response ], { type: mimeType } );
        thisImg.src = window.URL.createObjectURL( blob );
        if ( callback ) callback( this );
    };

    xmlHTTP.onprogress = function( e ) {
        if ( e.lengthComputable )
            thisImg.completedPercentage = parseInt( ( e.loaded / e.total ) * 100 );
        // Update your progress bar here. Make sure to check if the progress value
        // has changed to avoid spamming the DOM.
        // Something like: 
        // if ( prevValue != thisImage completedPercentage ) display_progress();
    };

    xmlHTTP.onloadstart = function() {
        // Display your progress bar here, starting at 0
        thisImg.completedPercentage = 0;
    };

    xmlHTTP.onloadend = function() {
        // You can also remove your progress bar here, if you like.
        thisImg.completedPercentage = 100;
    }
    xmlHTTP.send();
};

var config = {
  'body': {
    'required': true,
    'defaultIndex': 0,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-01.png?1548492299686',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-01.png?1548492299686'
        },
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-02.png?1548492299686',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-02.png?1548492299686'
        }
    ]
  },
  'pants': {
    'required': false,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fpants-01.png?1548492351218',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fpants-01.png?1548492351218'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fpants-02.png?1548492352339',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fpants-02.png?1548492352339'
        },
    ]
  },'wear': {
    'required': true,
    'defaultIndex': 0,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-01.png?1548652756945',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-01.png?1548652756945'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-02.png?1548652757309',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-02.png?1548652757309'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-03.png?1548652756997',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-03.png?1548652756997'
        },{
          'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-04.png?1548680310769',
          'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-04.png?1548680310769'
        },{
          'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-05.png?1548680310971',
          'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fwear-05.png?1548680310971'
        }
    ]
  },'body-wear': {
    'required': false,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-wear-01.png?1548652888043',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fbody-wear-01.png?1548652888043'
        }
    ]
  },'eyes': {
    'required': true,
    'defaultIndex': 0,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-01.png?1548653038254',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-01.png?1548653038254'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-02.png?1548653038829',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-02.png?1548653038829'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-03.png?1548681383592',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-03.png?1548681383592'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-04.png?1548681383567',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-04.png?1548681383567'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-05.png?1548681383757',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-05.png?1548681383757'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-06.png?1548681384056',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-06.png?1548681384056'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-07.png?1548681384184',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Feyes-07.png?1548681384184'
        },
    ]
  },'face': {
    'required': false,
    'defaultIndex': 0,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-01.png?1548653092423',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-01.png?1548653092423'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-02.png?1548681384783',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-02.png?1548681384783'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-03.png?1548681387096',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-03.png?1548681387096'
        },{
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-04.png?1548681384995',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fface-04.png?1548681384995'
        }
    ]
  },'hat': {
    'required': false,
    'images':[
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fhat-01.png?1548653126957',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fhat-01.png?1548653126957'
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fhat-02.png?1548653127549',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fhat-02.png?1548653127549'
        }
    ]
  },'mouth': {
    'required': true,
    'defaultIndex': 0,
    'images': [
        {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-01.png?1548679721152',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-01.png?1548679721152'
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-02.png?1548679721372',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-02.png?1548679721372'
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-03.png?1548681385461',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-03.png?1548681385461',
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-04.png?1548681385699',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-04.png?1548681385699',
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-05.png?1548681386202',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-05.png?1548681386202',
        }, {
            'thumbnail': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-06.png?1548681386636',
            'src': 'https://cdn.glitch.com/c2e79d08-6e6b-43b7-b39d-5b3b117677ff%2Fmouth-06.png?1548681386636',
        }
    ]
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  
})