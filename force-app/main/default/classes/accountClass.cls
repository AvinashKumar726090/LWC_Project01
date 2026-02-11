public with sharing class accountClass {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(String accId){
        try {
            return [
                SELECT Id, Name, Phone
                FROM Account
                WHERE Id = :accId
                WITH SECURITY_ENFORCED
            ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
