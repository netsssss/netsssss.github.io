// JavaScript Document
jQuery(document).ready(function($) {

				var home_banner_b_SlideshowTransitions = [{
					$Duration: 1200,
					$Zoom: 1,
					$Easing: {
						$Zoom: $Jease$.$InCubic,
						$Opacity: $Jease$.$OutQuad
					},
					$Opacity: 2
				}, {
					$Duration: 1000,
					$Zoom: 11,
					$SlideOut: true,
					$Easing: {
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear
					},
					$Opacity: 2
				}, {
					$Duration: 1200,
					$Zoom: 1,
					$Rotate: 1,
					$During: {
						$Zoom: [0.2, 0.8],
						$Rotate: [0.2, 0.8]
					},
					$Easing: {
						$Zoom: $Jease$.$Swing,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$Swing
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.5
					}
				}, {
					$Duration: 1000,
					$Zoom: 11,
					$Rotate: 1,
					$SlideOut: true,
					$Easing: {
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$InExpo
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.8
					}
				}, {
					$Duration: 1200,
					x: 0.5,
					$Cols: 2,
					$Zoom: 1,
					$Assembly: 2049,
					$ChessMode: {
						$Column: 15
					},
					$Easing: {
						$Left: $Jease$.$InCubic,
						$Zoom: $Jease$.$InCubic,
						$Opacity: $Jease$.$Linear
					},
					$Opacity: 2
				}, {
					$Duration: 1200,
					x: 4,
					$Cols: 2,
					$Zoom: 11,
					$SlideOut: true,
					$Assembly: 2049,
					$ChessMode: {
						$Column: 15
					},
					$Easing: {
						$Left: $Jease$.$InExpo,
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear
					},
					$Opacity: 2
				}, {
					$Duration: 1200,
					x: 0.6,
					$Zoom: 1,
					$Rotate: 1,
					$During: {
						$Left: [0.2, 0.8],
						$Zoom: [0.2, 0.8],
						$Rotate: [0.2, 0.8]
					},
					$Easing: {
						$Left: $Jease$.$Swing,
						$Zoom: $Jease$.$Swing,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$Swing
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.5
					}
				}, {
					$Duration: 1000,
					x: -4,
					$Zoom: 11,
					$Rotate: 1,
					$SlideOut: true,
					$Easing: {
						$Left: $Jease$.$InExpo,
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$InExpo
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.8
					}
				}, {
					$Duration: 1200,
					x: -0.6,
					$Zoom: 1,
					$Rotate: 1,
					$During: {
						$Left: [0.2, 0.8],
						$Zoom: [0.2, 0.8],
						$Rotate: [0.2, 0.8]
					},
					$Easing: {
						$Left: $Jease$.$Swing,
						$Zoom: $Jease$.$Swing,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$Swing
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.5
					}
				}, {
					$Duration: 1000,
					x: 4,
					$Zoom: 11,
					$Rotate: 1,
					$SlideOut: true,
					$Easing: {
						$Left: $Jease$.$InExpo,
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$InExpo
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.8
					}
				}, {
					$Duration: 1200,
					x: 0.5,
					y: 0.3,
					$Cols: 2,
					$Zoom: 1,
					$Rotate: 1,
					$Assembly: 2049,
					$ChessMode: {
						$Column: 15
					},
					$Easing: {
						$Left: $Jease$.$InCubic,
						$Top: $Jease$.$InCubic,
						$Zoom: $Jease$.$InCubic,
						$Opacity: $Jease$.$OutQuad,
						$Rotate: $Jease$.$InCubic
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.7
					}
				}, {
					$Duration: 1000,
					x: 0.5,
					y: 0.3,
					$Cols: 2,
					$Zoom: 1,
					$Rotate: 1,
					$SlideOut: true,
					$Assembly: 2049,
					$ChessMode: {
						$Column: 15
					},
					$Easing: {
						$Left: $Jease$.$InExpo,
						$Top: $Jease$.$InExpo,
						$Zoom: $Jease$.$InExpo,
						$Opacity: $Jease$.$Linear,
						$Rotate: $Jease$.$InExpo
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.7
					}
				}, {
					$Duration: 1200,
					x: -4,
					y: 2,
					$Rows: 2,
					$Zoom: 11,
					$Rotate: 1,
					$Assembly: 2049,
					$ChessMode: {
						$Row: 28
					},
					$Easing: {
						$Left: $Jease$.$InCubic,
						$Top: $Jease$.$InCubic,
						$Zoom: $Jease$.$InCubic,
						$Opacity: $Jease$.$OutQuad,
						$Rotate: $Jease$.$InCubic
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.7
					}
				}, {
					$Duration: 1200,
					x: 1,
					y: 2,
					$Cols: 2,
					$Zoom: 11,
					$Rotate: 1,
					$Assembly: 2049,
					$ChessMode: {
						$Column: 19
					},
					$Easing: {
						$Left: $Jease$.$InCubic,
						$Top: $Jease$.$InCubic,
						$Zoom: $Jease$.$InCubic,
						$Opacity: $Jease$.$OutQuad,
						$Rotate: $Jease$.$InCubic
					},
					$Opacity: 2,
					$Round: {
						$Rotate: 0.8
					}
				}];

				var home_banner_b_options = {
					$AutoPlay: true,
					$SlideshowOptions: {
						$Class: $JssorSlideshowRunner$,
						$Transitions: home_banner_b_SlideshowTransitions,
						$TransitionsOrder: 1
					},
					$ArrowNavigatorOptions: {
						$Class: $JssorArrowNavigator$
					},
					$ThumbnailNavigatorOptions: {
						$Class: $JssorThumbnailNavigator$,
						$Rows: 2,
						$Cols: 4,
						$SpacingX: 10,
						$SpacingY: 10,
						$Orientation: 2,
						$Align: 156
					}
				};

				var home_banner_b_slider = new $JssorSlider$("home_banner_b", home_banner_b_options);

				/*responsive code begin*/
				/*you can remove responsive code if you don't want the slider scales while window resizing*/
				function ScaleSlider() {
					var refSize = home_banner_b_slider.$Elmt.parentNode.clientWidth;
					if(refSize) {
						refSize = Math.min(refSize, 1186);
						refSize = Math.max(refSize, 300);
						home_banner_b_slider.$ScaleWidth(refSize);
					} else {
						window.setTimeout(ScaleSlider, 30);
					}
				}
				ScaleSlider();
				$(window).bind("load", ScaleSlider);
				$(window).bind("resize", ScaleSlider);
				$(window).bind("orientationchange", ScaleSlider);
				/*responsive code end*/
			});