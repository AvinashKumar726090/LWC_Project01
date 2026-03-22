public with sharing class Apex01 {
    public Apex01() {
        System.debug('Hi I am Avinash Kumar');
        List<Account> accList = [
            SELECT Id, Name, Phone
            FROM Account
            WITH SECURITY_ENFORCED
        ];
        List<Contact> conList = [
            SELECT Id, Name, Phone
            FROM Contact
            WITH SECURITY_ENFORCED
        ];
        // new Developer org Added
        
        List<AccountShare> accShareList = [
            SELECT Id, AccountId, UserOrGroupId
            FROM AccountShare
            WITH SECURITY_ENFORCED
        ];
        List<ContactShare> conShareList = [
            SELECT Id, ContactId, UserOrGroupId
            FROM ContactShare
            WITH SECURITY_ENFORCED
        ];
    }
}