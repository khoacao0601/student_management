import bcrypt from 'bcryptjs';
export const studentLogin = [
    { user_name: 'cao', password: bcrypt.hashSync('1490', 10), role: 'student' },
    { user_name: 'wilstead', password: bcrypt.hashSync('2291', 10), role: 'student' },
    { user_name: 'perceval', password: bcrypt.hashSync('8605', 10), role: 'student' },
    { user_name: 'revely', password: bcrypt.hashSync('7225', 10), role: 'student' },
    { user_name: 'oolahan', password: bcrypt.hashSync('5315', 10), role: 'student' },
    { user_name: 'edon', password: bcrypt.hashSync('0768', 10), role: 'student' },
    { user_name: 'cayette', password: bcrypt.hashSync('5737', 10), role: 'student' },
    { user_name: 'wickrath', password: bcrypt.hashSync('0375', 10), role: 'student' },
    { user_name: 'jovis', password: bcrypt.hashSync('4277', 10), role: 'student' },
    { user_name: 'robus', password: bcrypt.hashSync('3025', 10), role: 'student' },
    { user_name: 'aguirre', password: bcrypt.hashSync('9666', 10), role: 'student' },
    { user_name: 'shelmerdine', password: bcrypt.hashSync('9302', 10), role: 'student' },
    { user_name: 'staunton', password: bcrypt.hashSync('8304', 10), role: 'student' },
    { user_name: 'sweett', password: bcrypt.hashSync('5398', 10), role: 'student' },
    { user_name: 'burrel', password: bcrypt.hashSync('3141', 10), role: 'student' },
    { user_name: 'austwick', password: bcrypt.hashSync('1109', 10), role: 'student' },
    { user_name: 'mewrcik', password: bcrypt.hashSync('3584', 10), role: 'student' },
    { user_name: 'leonards', password: bcrypt.hashSync('1735', 10), role: 'student' },
    { user_name: 'kobierski', password: bcrypt.hashSync('9765', 10), role: 'student' },
    { user_name: 'siddele', password: bcrypt.hashSync('4476', 10), role: 'student' },
    { user_name: 'han', password: bcrypt.hashSync('1728', 10), role: 'student' },
    { user_name: 'gallahue', password: bcrypt.hashSync('9247', 10), role: 'student' },
    { user_name: 'raoult', password: bcrypt.hashSync('2132', 10), role: 'student' },
    { user_name: 'fligg', password: bcrypt.hashSync('7936', 10), role: 'student' },
    { user_name: 'mauchlen', password: bcrypt.hashSync('2904', 10), role: 'student' },
    { user_name: 'sly', password: bcrypt.hashSync('3146', 10), role: 'student' },
    { user_name: 'mantle', password: bcrypt.hashSync('3402', 10), role: 'student' },
    { user_name: 'swateridge', password: bcrypt.hashSync('1761', 10), role: 'student' },
    { user_name: 'satterthwaite', password: bcrypt.hashSync('2415', 10), role: 'student' },
    { user_name: 'joubert', password: bcrypt.hashSync('4702', 10), role: 'student' },
    { user_name: 'conti', password: bcrypt.hashSync('9040', 10), role: 'student' },
    { user_name: 'ludlem', password: bcrypt.hashSync('8779', 10), role: 'student' },
    { user_name: 'thiem', password: bcrypt.hashSync('9588', 10), role: 'student' },
    { user_name: 'sandilands', password: bcrypt.hashSync('3691', 10), role: 'student' },
    { user_name: 'kordovani', password: bcrypt.hashSync('3935', 10), role: 'student' },
    { user_name: 'dametti', password: bcrypt.hashSync('1604', 10), role: 'student' },
    { user_name: 'van der hoven', password: bcrypt.hashSync('0800', 10), role: 'student' },
    { user_name: 'astles', password: bcrypt.hashSync('3812', 10), role: 'student' },
    { user_name: 'skerrett', password: bcrypt.hashSync('1117', 10), role: 'student' },
    { user_name: 'borwick', password: bcrypt.hashSync('2579', 10), role: 'student' },
    { user_name: 'minchindon', password: bcrypt.hashSync('5076', 10), role: 'student' },
    { user_name: 'talmadge', password: bcrypt.hashSync('1559', 10), role: 'student' },
    { user_name: 'flatley', password: bcrypt.hashSync('3732', 10), role: 'student' },
    { user_name: 'dykes', password: bcrypt.hashSync('2884', 10), role: 'student' },
    { user_name: 'richold', password: bcrypt.hashSync('5744', 10), role: 'student' },
    { user_name: 'waldrum', password: bcrypt.hashSync('9257', 10), role: 'student' },
    { user_name: 'jeaycock', password: bcrypt.hashSync('6449', 10), role: 'student' },
    { user_name: 'leeds', password: bcrypt.hashSync('7184', 10), role: 'student' },
    { user_name: 'disney', password: bcrypt.hashSync('5329', 10), role: 'student' },
    { user_name: 'malarkey', password: bcrypt.hashSync('7435', 10), role: 'student' },
    { user_name: 'hannan', password: bcrypt.hashSync('9015', 10), role: 'student' },
    { user_name: 'le provest', password: bcrypt.hashSync('9325', 10), role: 'student' },
    { user_name: 'sturgis', password: bcrypt.hashSync('9163', 10), role: 'student' },
    { user_name: 'spurett', password: bcrypt.hashSync('2390', 10), role: 'student' },
    { user_name: 'orchard', password: bcrypt.hashSync('6585', 10), role: 'student' },
    { user_name: 'triggel', password: bcrypt.hashSync('3285', 10), role: 'student' },
    { user_name: 'rope', password: bcrypt.hashSync('7646', 10), role: 'student' },
    { user_name: 'rablin', password: bcrypt.hashSync('5020', 10), role: 'student' },
    { user_name: 'creany', password: bcrypt.hashSync('1547', 10), role: 'student' },
    { user_name: 'addlestone', password: bcrypt.hashSync('2912', 10), role: 'student' },
    { user_name: 'jorge', password: bcrypt.hashSync('3394', 10), role: 'student' },
    { user_name: 'weippert', password: bcrypt.hashSync('5625', 10), role: 'student' },
    { user_name: 'cocke', password: bcrypt.hashSync('3694', 10), role: 'student' },
    { user_name: 'estrella', password: bcrypt.hashSync('9463', 10), role: 'student' },
    { user_name: 'evemy', password: bcrypt.hashSync('5004', 10), role: 'student' },
    { user_name: 'stetson', password: bcrypt.hashSync('0096', 10), role: 'student' },
    { user_name: 'champneys', password: bcrypt.hashSync('2827', 10), role: 'student' },
    { user_name: 'bingle', password: bcrypt.hashSync('5123', 10), role: 'student' },
    { user_name: 'kienlein', password: bcrypt.hashSync('4299', 10), role: 'student' },
    { user_name: 'laxtonne', password: bcrypt.hashSync('1144', 10), role: 'student' },
    { user_name: 'daftor', password: bcrypt.hashSync('2019', 10), role: 'student' },
    { user_name: 'vidloc', password: bcrypt.hashSync('6915', 10), role: 'student' },
    { user_name: 'comberbeach', password: bcrypt.hashSync('4580', 10), role: 'student' },
    { user_name: 'shillington', password: bcrypt.hashSync('1075', 10), role: 'student' },
    { user_name: 'mochan', password: bcrypt.hashSync('0074', 10), role: 'student' },
    { user_name: 'kohnert', password: bcrypt.hashSync('7408', 10), role: 'student' },
    { user_name: 'nieass', password: bcrypt.hashSync('2713', 10), role: 'student' },
    { user_name: 'chern', password: bcrypt.hashSync('1132', 10), role: 'student' },
    { user_name: 'girardetti', password: bcrypt.hashSync('7633', 10), role: 'student' },
    { user_name: 'stoakes', password: bcrypt.hashSync('3029', 10), role: 'student' },
    { user_name: 'vickress', password: bcrypt.hashSync('4632', 10), role: 'student' },
    { user_name: 'greally', password: bcrypt.hashSync('8453', 10), role: 'student' },
    { user_name: 'banaszewski', password: bcrypt.hashSync('6737', 10), role: 'student' },
    { user_name: 'behr', password: bcrypt.hashSync('7275', 10), role: 'student' },
    { user_name: 'mcleese', password: bcrypt.hashSync('6390', 10), role: 'student' },
    { user_name: 'congrave', password: bcrypt.hashSync('4977', 10), role: 'student' },
    { user_name: 'farnish', password: bcrypt.hashSync('4070', 10), role: 'student' },
    { user_name: 'debold', password: bcrypt.hashSync('5354', 10), role: 'student' },
    { user_name: 'corriea', password: bcrypt.hashSync('2029', 10), role: 'student' },
    { user_name: 'rumbellow', password: bcrypt.hashSync('8998', 10), role: 'student' },
    { user_name: 'pouton', password: bcrypt.hashSync('0722', 10), role: 'student' },
    { user_name: 'lygo', password: bcrypt.hashSync('2926', 10), role: 'student' },
    { user_name: 'pullar', password: bcrypt.hashSync('5867', 10), role: 'student' },
    { user_name: 'antcliff', password: bcrypt.hashSync('1581', 10), role: 'student' },
    { user_name: 'colles', password: bcrypt.hashSync('2120', 10), role: 'student' },
    { user_name: 'narey', password: bcrypt.hashSync('2360', 10), role: 'student' },
    { user_name: 'schober', password: bcrypt.hashSync('0977', 10), role: 'student' },
    { user_name: 'blaes', password: bcrypt.hashSync('1583', 10), role: 'student' },
    { user_name: 'swinfen', password: bcrypt.hashSync('2063', 10), role: 'student' },
    { user_name: 'veronique', password: bcrypt.hashSync('5336', 10), role: 'student' },
];
