$(function() {
    //select plugin stuff
    var moneyIcons = {
        PerfectMoney: {
            currency: '<span> (PM)</span>',
            url:'img/icon-pm.png'
        },
        Webmoney: {
            currency: '<span> (RUB)</span>',
            url:'img/icon-wm.png'
        },
        Bitcoin: {
            currency: '<span> (BTC)</span>',
            url:'img/icon-bm.png'
        }
    };

    var langIcons = {
        ru: 'img/flag-ru.png',
        es: 'img/flag-es.png',
        en: 'img/flag-en.png'
    };

    var languageSelect = $('.mini-select--language').find('select');
    var ratesFilter = $('.mini-select--filter').find('select');
    var paySelect = $('#paySelect');
    var getSelect = $('#getSelect');
    var currencySelect = $('#currencySelect');

    function renderWithImage(href, text, add) {
        if(add) {
            return '<img src="' + href + '"> ' + text + add;
        }
        else {
            return '<img src="' + href + '"> ' + text;
        }
    }

    languageSelect.fancySelect({
        optionTemplate: function(optionEl) {
            return renderWithImage(langIcons[optionEl.text()], optionEl.text());
        }
    }).on('change.fs', function() {
        var val = $(this).val();
        $(this).parent().find('.trigger').html(renderWithImage(langIcons[val], val))
    });
    $(languageSelect).parent().find('.trigger').html(renderWithImage(langIcons[$(languageSelect).val()], $(languageSelect).val()));


    ratesFilter.fancySelect({
        optionTemplate: function(optionEl) {
            return '<div class="filter" data-filter="' + optionEl.val() + '">' + optionEl.text() + '</div>';
        }
    });


    [$('#getSelect'), $('#paySelect'), $('#currencySelect')].forEach(function($select) {
        if (!$select.length) return;
        $select.fancySelect({
            optionTemplate: function(optionEl) {
                return renderWithImage(moneyIcons[optionEl.text()].url, optionEl.text(), moneyIcons[optionEl.text()].currency);
            }
        }).on('change.fs', function() {
            var val = $(this).val();
            $(this).parent().find('.trigger').html(renderWithImage(moneyIcons[val].url, val, moneyIcons[val].currency))
        });
        $select.parent().find('.trigger').html(renderWithImage(moneyIcons[$select.val()].url, $select.val(), moneyIcons[$select.val()].currency))
    });


    //loader stuff
    var loader = $('.action-next').find('img');

    loader.on('click', function() {
        load();
    });

    function load() {
        loader.toggleClass('hidden');
        $('.loader').toggleClass('visible');
        setTimeout(function() {
            loader.toggleClass('hidden');
            $('.loader').toggleClass('visible');
        }, 1000);
    };

    //sort plugin stuff
    $('.rates__table').mixItUp({
        animation: {
            enable: false
        },
        selectors: {
            target: '.sorted'
        },
        load: {
            sort: false
        },
        layout: {
            display: 'table-row'
        }
    });

});

