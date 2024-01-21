
import { useEffect } from 'react';
import $ from 'jquery';

const ScrollComponent = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 300) {
                $('#btn-top').fadeIn(800);
            } else {
                $('#btn-top').fadeOut(800);
            }

            if (scrollPosition > 200 && !$('#load_tawk').hasClass('tawk_add')) {
                $('#load_tawk').append(
                    "<script>var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement('script'),s0=document.getElementsByTagName('script')[0];s1.async=true;s1.src='https://embed.tawk.to/597813875dfc8255d623ef26/default';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();<\/script>"
                );
                $('#load_tawk').addClass('tawk_add');
            }
        };
        const handleButtonClick = () => {
            $('body,html').animate(
                {
                    scrollTop: 0,
                },
                800
            );
        };

        $(window).on('scroll', handleScroll);
        $('#btn-top').on('click', handleButtonClick);

        return () => {
            // Cleanup when component unmounts
            $(window).off('scroll', handleScroll);
            $('#btn-top').off('click', handleButtonClick);
        };
    }, []);

    return null; // Since this is a utility component, it doesn't render anything
};

export default ScrollComponent;
