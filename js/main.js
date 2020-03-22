var internet_prices = {
    '3': {
    },
    '4': {
        '8mbit': {
            'name': 'xDSL (линия+аренда модема)',
            'price': 589,
            'agent': 572,
            'additional': {
                'tv': {
                    'name': 'ИТВ пакет Стартовый',
                    'price': 908,
                    'agent': 1178.8
                }
            }
        },
        '100mbit': {
            'name': 'ETTH/PON (30 Мб + роутер)',
            'price': 580,
            'agent': 717.75,
            'additional': {
                'tv': {
                    'name': 'ИТВ',
                    'price': 760,
                    'agent': 1218
                },
                'tv+camera': {
                    'name': 'ИТВ+Видеонаблюдение',
                    'price': 960,
                    'agent': 1017
                },
                'konvergent': {
                    'name': 'ИТВ+MVNO',
                    'price': 790,
                    'agent': 2405.55
                }
            }
        }
    }
};

var camera_prices = {
    '4': {
        'internal': {
            'hd-camera': {
                'name': 'Wi-Fi HD видеокамера',
                'info': '6 месяцев бесплатно, далее от 350 руб/месяц',
                'price': 4990,
                'agent': 651
            },
            'full-hd-camera': {
                'name': 'Wi-Fi FullHD видеокамера',
                'info': '6 месяцев бесплатно, далее от 350 руб/месяц',
                'price': 6990,
                'agent': 912
            },
            'ptz-camera': {
                'name': 'Wi-Fi PTZ видеокамера',
                'info': '6 месяцев бесплатно, далее от 350 руб/месяц',
                'price': 7500,
                'agent': 978
            }
        },
        'external': {
            'hi-watch-camera': {
                'name': 'Видеокамера цилиндрическая HiWatch DSI120; купольная HiWatch DS-I122',
                'info': '6 месяцев бесплатно, далее от 350 руб/месяц',
                'price': 6690,
                'agent': 873
            },
            'ezviz-camera': {
                'name': 'Видеокамера CS-C3SHW',
                'info': '6 месяцев бесплатно, далее от 350 руб/месяц',
                'price': 7500,
                'agent': 978
            }
        }
    }
};

var additional_prices = {
    'wink-buy': {
        'name': 'Покупка Wink+ приставки',
        'price': 4500,
        'agent': 587
    },
    'wink-rent': {
        'name': 'Аренда Wink+',
        'price': 110,
        'agent': 110
    }
};