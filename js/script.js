$(function() {

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

    var languageSelect = $('.language__select');
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
});

