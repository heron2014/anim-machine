$(document).ready(function(){

    //colors before reset:
    //green #22DD6D
    // red #F40B42
    //orange #F9BA1C

    //meter bcg = #c6d7df to #5ab783
    //meter stroke #7c99a2 to #448962

    var $anita = $('#Anita'),
        $anita2 = $('#Anita2'),
        $handRight = $('#HandR_1_'),
        $mainBulb = $('#MainBulb'),
        $liquids = $('.liquid'),
        $Liquid1 = $('#Liquid1'),
        $LiquidA1 = $('#LiquidA1'),
        $Liquid2 = $('#Liquid2'),
        $Liquid3 = $('#Liquid3'),
        $Liquid4 = $('#Liquid4'),
        $Liquid5 = $('#Liquid5'),
        $Liquid6 = $('#Liquid6'),
        $Liquid7 = $('#Liquid7'),
        $Liquid8 = $('#Liquid8'),
        $Liquid9 = $('#Liquid9'),
        $LiquidInside1Mask = $('#LiquidInside1Mask'),
        $LiquidInside2Mask = $('#LiquidInside2Mask'),
        $LiquidInside3Mask = $('#LiquidInside3Mask'),
        $LiquidInside4Mask = $('#LiquidInside4Mask'),
        $LiquidInside5Mask = $('#LiquidInside5Mask'),
        $bulb1 = $('#Bulb1 .bulb'),
        $bulb2 = $('#Bulb2 .bulb'),
        $bulb3 = $('#Bulb3 .bulb'),
        $meterBcg = $('#meterBcg'),
        $meterStroke = $('#meterStroke'),
        $part2light = $('#Part2 .light'),
        $part2lightLeft = $('#Part2 .light-left'),
        $part2lightMid = $('#Part2 .light-mid'),
        $part2lightRight = $('#Part2 .light-right'),
        $printerTopLights = $('#PrinterLIghtTop_5_','#PrinterLIghtTop_4_'),
        $printerBottomLights = $('#PrinterLIghtBottom_3_','#PrinterLIghtBottom_2_'),
        $paper = $('#Paper_1_'),
        $slider = $('#slider1'),
        $pointer = $('#pointer'),
        $part1 = $('#Part1'),
        $endTube = $('#Part1_1_'),
        $h1 = $('#container h1'),
        $h2 = $('#container h2'),
        $h3 = $('#container h3'),
        $h4 = $('#container h4'),
        path = [{x: -20, y: -200},{x: -300, y: -310},{x: -500, y: 220}],
        $smile = $('#smile'),
        aside = document.getElementsByTagName('aside'),
        mainTl = new TimelineMax();

    function clearStage() {
        var clearTl = new TimelineMax();
        clearTl
            .set($anita, {autoAlpha: 1, x: '1400%', scale: 2.5, transformOrigin: 'bottom center'})
            .set($mainBulb, {fill: '#ffffff'})
            .set($liquids, {stroke: '#ffffff'})
            .set($LiquidInside1Mask, {attr: {y: 765}}) //y + height
            .set($LiquidInside2Mask, {attr: {y: 753}})
            .set($LiquidInside3Mask, {attr: {y: 750}})
            .set($LiquidInside4Mask, {attr: {y: 893}})
            .set($LiquidInside5Mask, {attr: {y: 877}})
            .set($pointer, {rotation: -45, transformOrigin: 'bottom center'})
            .set($paper, {y: '+=58'})
            .set($anita2, {autoAlpha: 0})
        ;

        return clearTl;
    }

    function getIntroTl() {
        var introTl = new TimelineMax();

        introTl

            .to($anita, 0.5, {x: '1000%', ease: Power4.easeInOut})
            //.fromTo(aside, 1, {backgroundColor: 'rgba(1, 160, 147, 0.46)'}, {backgroundColor: '#01A093'})
            .fromTo($h1, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1}, '-=0.4')
            .fromTo($h2, 0.5, {x: '-46%', autoAlpha: 0}, {x: '-50%', autoAlpha: 1})
            .fromTo($smile, 0.4, {scale: 0.4, transformOrigin: 'center center'}, {scale: 1, ease: Power4.easeInOut}, '+=0.6');
        return introTl;
    }

        var controller = new ScrollMagic.Controller();

        // 3. Timeline
        var pathLiquid = document.querySelector('#LiquidA1');
        var length = pathLiquid.getTotalLength();

        var liquidLength = [130, 213, 228, 123, 124, 124, 101, 988, 345, 393];
        // reset all liquids to be invisible
        function resetToinvisible() {
            return $liquids.each(function(index, element) {
                TweenMax.set(element, {strokeDashoffset: liquidLength[index], strokeDasharray: liquidLength[index]})
            });
        }

        var animations = new TimelineMax();
        animations
            .to($h1, 0.3, {autoAlpha: 0, ease:Power4.easeOut})
            .to($h2, 0.3, {autoAlpha: 0, ease:Power4.easeOut})
            .to($anita, 0.8, {scale: 1.1, transformOrigin: 'bottom center'})
            .to($anita, 14, {rotation:540, transformOrigin:"left 50%", bezier: {curviness: 1, values: path}, ease:  SlowMo.ease.config( 0.1, 0.4, false)},'+=5')
            .to($anita, 2, {autoAlpha: 0, ease:Power4.easeOut})
            .to($part1, 3.06, {rotation: 6, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 5, yoyo: true})
            .add('part2-lights')
            .to($pointer, 2, {rotation: 20})
            .staggerTo($part2light, 0.1, {fill: '#F9BA1C'}, 0.5, 'part2-lights')
            .staggerTo($part2light, 0.6, {fill: '#F40B42'}, 1.4, 'part2-lights+=1.5')
            .staggerTo($part2light, 0.8, {fill: '#22DD6D'}, 1.5, 'part2-lights+=1.5')
            .to($meterBcg, 0.5, {fill: '#5AB783'}, 'part2-lights+=1')
            .to($meterStroke, 1.4, {stroke: '#448962'}, 'part2-lights+=1.6')
            .to($slider, 1.2, {x: '-=10px', ease: Power4.easeInOut})
            .set($bulb1, {fill: '#5AB783'},'part2-lights+=2')
            .set($bulb2, {fill: '#F40B42'},'part2-lights+=3')
            .set($bulb3, {fill: '#F9BA1C'},'part2-lights+=4')
            .to($h3, 8, {autoAlpha: 1, ease:Power4.easeOut})
            .add(TweenMax.set($LiquidA1, {strokeDashoffset: length, strokeDasharray: length}))
            .add(TweenMax.set($Liquid2, {strokeDashoffset: 101, strokeDasharray: 101}))
            .add(TweenMax.set($Liquid3, {strokeDashoffset: 123, strokeDasharray: 123}))
            .add(TweenMax.set($Liquid4, {strokeDashoffset: 124, strokeDasharray: 124}))
            .add(TweenMax.set($Liquid5, {strokeDashoffset: 228, strokeDasharray: 228}))
            .add(TweenMax.set($Liquid6, {strokeDashoffset: 124, strokeDasharray: 124}))
            .add(TweenMax.set($Liquid7, {strokeDashoffset: 214, strokeDasharray: 214}))
            .add(TweenMax.set($Liquid8, {strokeDashoffset: 393, strokeDasharray: 393}))
            .add(TweenMax.set($Liquid9, {strokeDashoffset: 130, strokeDasharray: 130}))
            .set($liquids, {stroke: '#F8876E'})
            //.set($Liquid9, {stroke: '#F40B42'})
            .to($LiquidA1, 8, {strokeDashoffset: 988,
                ease:
                    Power0.easeNone,
                y: 0
            },'+=3.2')
            .add('flask01')

            //.to($h3, 10, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=10')

            .to($Liquid2, 6.5, {strokeDashoffset: 0,
                ease:
                    Power0.easeNone,
                y: 0
            },'+=6')
            .add('flask02')
            .to($Liquid3, 8.5, {strokeDashoffset: 0,
                ease:
                    Power0.easeNone,
                y: 0
            },'+=10.2')
            .add('flask03')
            .to($Liquid4, 9.5, {strokeDashoffset: 0,
                ease:
                    Power0.easeNone,
                y: 0
            }, '+=10')
            .to($Liquid5, 10.6, {strokeDashoffset: 0,
                ease:
                    Power0.easeNone,
                y: 0
            })
            .to($Liquid6, 11.7, {strokeDashoffset: 0,
                ease:
                    Power0.easeNone,
                y: 0
            }, '+=12')
            .add('flask04')
            //.fromTo($mainBulb, 25, {fill: '#ffffff'}, {fill: '#F8AD43', repeat: 10, yoyo: true}, 'flask02+=25')
            //.to($h3, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
            //.to($h3, 0.2, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
            //.set($h3, {y: '-=30px', text: "fine-tune easing"})
            .to($Liquid7, 10.4, {strokeDashoffset: 0, ease:Power0.easeNone}, 'flask04+=28')
            .to($Liquid8, 17.5, {strokeDashoffset: 0, ease:Power0.easeNone}, 'flask04+=29')
            .add('flask06')
            .set($h3, {scale: 1.2, y: '+=40px', text: 'Later become smoother', ease: Power4.easeInOut})
            .to($h3, 5, {y: '+=40px', autoAlpha: 1, ease: Power4.easeInOut}, 'flask06+=21')
            //.to($h3, 0.3, {y: '+=20px', autoAlpha: 1, ease: Power4.easeInOut})
            //.to($h3, 0.2, {y: '+=10px', autoAlpha: 0, ease: Power4.easeInOut}, '+=2')
            //.set($h3, {y: '-=30px', text: "master GreenSock animations"})
            .add('main-bulb')
            .to($Liquid9, 14.6, {strokeDashoffset: 0, ease:Power0.easeNone}, '+=4.2')
            .to($LiquidInside1Mask, 19, {attr: {y:688}, ease: Power0.easeNone}, 'flask01+=9')
            .to($LiquidInside2Mask, 20, {attr: {y:710}, ease: Power0.easeNone}, 'flask02+=20')
            .to($LiquidInside3Mask, 24, {attr: {y:711}, ease: Power0.easeNone}, 'flask03+=26')
            .to($LiquidInside4Mask, 32, {attr: {y:845}, ease: Power0.easeNone}, 'flask04+=32')
            .to($LiquidInside5Mask, 32, {attr: {y:786}, ease: Power0.easeNone}, 'main-bulb+=35')
            //.set($mainBulb, {immediateRender: false})

            .add('paper')
            .to($paper, 10, {y: 0, ease: SteppedEase.config(10)})
            //.to($printerTopLights, 10, {fill: '#5AB783'})
            //.to($printerBottomLights, 10.9, {fill: '#5AB783'},'+=10.3')
            .to($mainBulb, 25, {fill: '#F8AD43'},'paper+=30')
            .to($endTube, 5.06, {rotation: 10, y: '+=5px', x: '+=3px', transformOrigin: 'bottom right', repeat: 11, yoyo: true}, '+=15')

            .to($anita2, 5.06, {autoAlpha: 1})
            //.set($h3, {scale: 1.2, y: '+=100px', text: 'something'})
            //.to($h3, 5, {y: '+=40px', autoAlpha: 1, ease: Power4.easeInOut}, 'paper+=21')

            .fromTo($h4, 12.5, {autoAlpha: 0}, {autoAlpha: 1, scale: 2, ease: Power4.easeInOut}, '+=2');



        // 3. Scene
    if (window.innerWidth <= 1225) {
        var scene1 = new ScrollMagic.Scene({triggerElement: "#scene1", triggerHook: 'onLeave', duration: 800, offset: 30, delay: 15})
            .addTo(controller)
            .addIndicators()
            .setTween(animations);
    } else if(window.innerWidth === 1366) {
        scene1 = new ScrollMagic.Scene({triggerElement: "#scene1", triggerHook: 'onLeave', duration: 800, offset: 50, delay: 15})
            .addTo(controller)
            .addIndicators()
            .setTween(animations);
    }
    else {
        scene1 = new ScrollMagic.Scene({triggerElement: "#scene1", triggerHook: 'onLeave', duration: 600, offset: 150, delay: 5})
            .addTo(controller)
            .addIndicators()
            .setTween(animations);
    }



    function init() {
        mainTl
            .add(clearStage())
            .add(getIntroTl(), 'scene-intro');
    }

    init();

});
