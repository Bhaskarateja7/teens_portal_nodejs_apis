module.exports={

    insertuser : 'insert into user values(?,?,?,?,?,?)',
    insertvendor: 'insert into vendor values(?,?,?,?,?,?,?,?,?,?,?,?)',
    insertteen: 'insert into teen values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    insertjob : 'insert into job values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    insertjobcategory:'insert into jobcategory values(?,?,?,?)',

    get:'select * from ??',
    getbyid : 'select * from  ?? where id = ?',

    getemail : 'select t.parentemail from teen t inner join user u on u.id = t.uid where t.id=?',

    parent : "insert into parnt values(?,?,?)",

    selectjobsbyvendor : "select jc.category,j.*,v.name jobapplication inner join job full join jobCategory jc on j.jcid = jc.id inner join vendor v on v.id=j.vid where v.id=? ",

    updateStatus : 'update ?? set status ="deactive",timestamp=? where id=? ',
    update : 'update ?? set ??=?,timestamp=? where id=? ',

    insertjobapplication : 'inset into jobapplication values   ',

    remove : 'DELETE FROM ?? WHERE id =?',
}