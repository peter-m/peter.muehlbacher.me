<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

	<head>
	
		<!-- META -->
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

		<meta name="description" content="{{$description}}" />
		<meta name="keywords" content="{{$keywords}}" />
		<meta name="language" content="en" />

		<title>{{$title}}</title>

        <script src='src/js/libs/modernizr-2.0.6.min.js'></script>
        
		<link rel="stylesheet" type="text/css" href="dist/app.min.css" />

        <script data-main="dist/app.min" src="src/js/libs/require/require.js"></script>
        @include('partials.ga')

	</head>
	
	<body>  
        <div class="container">
            <header class="main-header" role="banner">
                <h1 class="page-title">{{$title}}</h1>
                <nav class="navigation main-navigation" role="navigation">
                    <h2>navigation</h2>
                    <ul role="menu">
                        <li role="menuitem"><a href="//localhost/muehlbacher/playground/scroll.html">scroll</a></li>
                       	<li role="menuitem"><a href="//localhost/muehlbacher/playground/slide.html">slide</a></li> 
                        <li role="menuitem"><a href="//localhost/muehlbacher/playground/search.html">search</a></li>
                        <li role="menuitem"><a href="//localhost/muehlbacher/playground/backbone.html">backbone.js</a></li>
                    </ul>
                </nav>
            </header>
            <section role="main" id="main-content">
                {{$content}}
            </section>
            <footer role="contentinfo">
                {footer's contents}
            </footer>
        </div> <!-- .container -->
	</body>

</html>