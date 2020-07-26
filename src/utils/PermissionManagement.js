import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";


const PermissionList = {
    ContentManagementPermission: {
        Management: { ContentManagement: "CONTENT_MANAGEMENT" }
    },
    DocumentPermission: {
        Upload: { DocumentUpload: "DOCUMENT_UPLOAD" },
        Edit: { DocumentEdit: "DOCUMENT_EDIT" },
        Delete: { DocumentDelete: "DOCUMENT_DELETE" },
        Approve: { DocumentApprove: "DOCUMENT_APPROVE" },
        Download: { DocumentDownload: "DOCUMENT_DOWNLOAD" },
        Preview: { DocumentPreview: "DOCUMENT_PREVIEW" },

        All: {
            DocumentUpload: "DOCUMENT_UPLOAD",
            DocumentEdit: "DOCUMENT_EDIT",
            DocumentDelete: "DOCUMENT_DELETE",
            DocumentApprove: "DOCUMENT_APPROVE",
            DocumentDownload: "DOCUMENT_DOWNLOAD",
            DocumentPreview: "DOCUMENT_PREVIEW"
        }
    },
    PostPermission:
    {
        Create: { PostCreate: "POST_CREATE" },
        Edit: { PostEdit: "POST_EDIT" },
        Delete: { PostDelete: "POST_DELETE" },
        Approve: { PostApprove: "POST_APPROVE" },
        Comment: { PostComment: "POST_COMMENT" },
        Like: { PostLike: "POST_LIKE" },
        Save: { PostSave: "POST_SAVE" },

        All: {
            PostCreate: "POST_CREATE",
            PostEdit: "POST_EDIT",
            PostDelete: "POST_DELETE",
            PostApprove: "POST_APPROVE",
            PostComment: "POST_COMMENT",
            PostLike: "POST_LIKE",
            PostSave: "POST_SAVE"
        }
    },

    CategoryPermission: {

        View: { CategoryView: "CATEGORY_VIEW" },
        All: {
            CategoryView: "CATEGORY_VIEW",
            DocCategoryAdd: "DOC_CATEGORY_ADD",
            DocCategoryEdit: "DOC_CATEGORY_EDIT",
            PostCategoryAdd: "POST_CATEGORY_ADD",
            PostCategoryEdit: "POST_CATEGORY_EDIT",
            SubjectCategoryAdd: "SUBJECT_CATEGORY_ADD",
            SubjectCategoryEdit: "SUBJECT_CATEGORY_EDIT",
            SemesterCategoryAdd: "SEMESTER_CATEGORY_ADD",
            SemesterCategoryEdit: "SEMESTER_CATEGORY_EDIT",
        },
        DocCategoryPermission: {
            Add: { DocCategoryAdd: "DOC_CATEGORY_ADD" },
            Edit: { DocCategoryEdit: "DOC_CATEGORY_EDIT" },
            All: {
                DocCategoryAdd: "DOC_CATEGORY_ADD",
                DocCategoryEdit: "DOC_CATEGORY_EDIT"
            }
        },
        PostCategoryPermission:
        {
            Add: { PostCategoryAdd: "POST_CATEGORY_ADD" },
            Edit: { PostCategoryEdit: "POST_CATEGORY_EDIT" },
            All: {
                PostCategoryAdd: "POST_CATEGORY_ADD",
                PostCategoryEdit: "POST_CATEGORY_EDIT",
            }
        },
        SubjectPermission:
        {
            Add: { SubjectCategoryAdd: "SUBJECT_CATEGORY_ADD" },
            Edit: { SubjectCategoryEdit: "SUBJECT_CATEGORY_EDIT" },
            All: {
                SubjectCategoryAdd: "SUBJECT_CATEGORY_ADD",
                SubjectCategoryEdit: "SUBJECT_CATEGORY_EDIT",
            }
        },
        SemesterPermission: {
            Add: { SemesterCategoryAdd: "SEMESTER_CATEGORY_ADD" },
            Edit: { SemesterCategoryEdit: "SEMESTER_CATEGORY_EDIT" },
            All: {
                SemesterCategoryAdd: "SEMESTER_CATEGORY_ADD",
                SemesterCategoryEdit: "SEMESTER_CATEGORY_EDIT",
            }
        },
    }
    ,
    RolePermission:
    {
        Add: { RoleAdd: "ROLE_ADD" },
        Edit: { RoleEdit: "ROLE_EDIT" },
        Delete: { RoleDelete: "ROLE_DELETE" },
        All: {
            RoleAdd: "ROLE_ADD",
            RoleEdit: "ROLE_EDIT",
            RoleDelete: "ROLE_DELETE",
        }
    },

    ActivityPermission:
    {
        View: { ActivityView: "ACTIVITY_VIEW" },
        // Add: { ActivityAdd: "ACTIVITY_ADD" },
        // Edit: { ActivityEdit: "ACTIVITY_EDIT" },
        Delete: { ActivityDelete: "ACTIVITY_DELETE" },
        Approve: { ActivityApprove: "ACTIVITY_APPROVE" },
        All: {
            ActivityView: "ACTIVITY_VIEW",
            // ActivityAdd: "ACTIVITY_ADD",
            // ActivityEdit: "ACTIVITY_EDIT",
            ActivityDelete: "ACTIVITY_DELETE",
            ActivityApprove: "ACTIVITY_APPROVE"
        }
    },
    UserPermission: //interact to list of all user in the system, or another user
    {
        View: { UserView: "USER_VIEW" },
        Edit: { USerEdit: "USER_EDIT" },
        Ban: { UserDelete: "USER_BAN" },
        ChangePass: { UserChangePass: "USER_CHANGE_PASS" },
        DeletePost: { UserDeletePost: "USER_DELETE_POST" },
        DeleteDoc: { UserDeleteDoc: "USER_DELETE_DOC" },
        EditDoc: { UserEditDoc: "USER_EDIT_DOC" },
        EditPost: { UserEditPost: "USER_EDIT_POST" },
        ChangeRole: { UserChangeRole: "USER_CHANGE_ROLE" },
        Report: { UserReport: "USER_REPORT" },

        All: {
            UserView: "USER_VIEW",
            UserEdit: "USER_EDIT",
            UserBan: "USER_BAN",
            UserChangePass: "USER_CHANGE_PASS",
            UserDeletePost: "USER_DELETE_POST",
            UserDeleteDoc: "USER_DELETE_DOC",
            UserEditDoc: "USER_EDIT_DOC",
            UserEditPost: "USER_EDIT_POST",
            UserChangeRole: "USER_CHANGE_ROLE",
            UserReport: "USER_REPORT"
        }
    },
    AccountPermission: //interact to own account
    {
        Edit: { AccountEdit: "ACCOUNT_EDIT" },
        ChangePass: { AccountChangePass: "ACCOUNT_CHANGE_PASS" },
        DeletePost: { AccountDeletePost: "ACCOUNT_DELETE_POST" },
        DeleteDoc: { AccountDeleteDoc: "ACCOUNT_DELETE_DOC" },
        PreviewDoc: { AccountPreviewDoc: "ACCOUNT_PREVIEW_DOC" },
        PreviewPost: { AccountPreviewPost: "ACCOUNT_PREVIEW_POST" },
        All: {
            AccountEdit: "ACCOUNT_EDIT",
            AccountChangePass: "ACCOUNT_CHANGE_PASS",
            AccountDeletePost: "ACCOUNT_DELETE_POST",
            AccountDeleteDoc: "ACCOUNT_DELETE_DOC",
            AccountPreviewDoc: "ACCOUNT_PREVIEW_DOC",
            AccountPreviewPost: "ACCOUNT_PREVIEW_POST"
        }
    },
    NotificationPermission: //interact to own account
    {
        Edit: { NotificationEdit: "NOTIFICATION_EDIT" },
        Add: { NotificationAdd: "NOTIFICATION_ADD" },
        Delete: { NotificationDelete: "NOTIFICATION_DELETE" },
        Set: { NotificationSet: "NOTIFICATION_SET" },
        UnsetAny: { NotificationUnsetAny: "NOTIFICATION_UNSET_ANY" },
        ViewAll: { NotificationViewAll: "NOTIFICATION_VIEW_ALL" }, //View in table

        All: {
            NotificationEdit: "NOTIFICATION_EDIT",
            NotificationAdd: "NOTIFICATION_ADD",
            NotificationDelete: "NOTIFICATION_DELETE",
            NotificationSet: "NOTIFICATION_SET",
            NotificationUnsetAny: "NOTIFICATION_UNSET_ANY",
            NotificationViewAll: "NOTIFICATION_VIEW_ALL"
        }
    }
}

export function getRoleNameByName(roleName) {
    if (roleName === "ADMIN")
        return "Admin";
    if (roleName === "USER")
        return "User";
    if (roleName === "COLLABORATOR")
        return "Collaborator";
    return "Guest";
}


export function getRoleNameFilterByName(roleName) {
    if (roleName === "ADMIN")
        return "Admin";
    if (roleName === "USER")
        return "User";
    if (roleName === "COLLABORATOR")
        return "Collaborator";
    return "All";
}


export function getRoleNamebyID(roleId) {
    if (roleId === 1)
        return "Admin";
    if (roleId === 2)
        return "User";
    if (roleId === 3)
        return "Collaborator";
    return "Guest";
}

//to use this function, class use this must have 
export const isGrantedPermissions = function (permissionList) {
    if (this.props.accountInformation.roleName) {
        for (let key in permissionList) {
            if (!(getPermissionOfRoleByRoleName(this.props.accountInformation.roleName).hasOwnProperty(key)))
                return false;
        }
        return true;
    }
    else {
        console.log("Please make props.accountInformation.roleName of " + this.class + "not undefined or null!")
    }
    return false;
}



// export function isGrantedSpecificPermissionByRoleId(permission, roleId) {

// }

// export function isGrantedPermissions(...listPermissionName) {

// }

// export function isGrantedPermissionsById(...listPermissionName) {

// }

export function logAllPermissionByRoleName(roleName) {
    if (roleName === "ADMIN") {
        console.log(ADMIN);
        return;
    }
    if (roleName === "USER") {
        console.log(USER);
        return;
    }
    if (roleName === "COLLABORATOR") {
        console.log(COLLABORATOR);
        return;
    }

}


//config:
const ADMIN = {
    ...PermissionList.ContentManagementPermission.Management,
    ...PermissionList.AccountPermission.All,
    ...PermissionList.DocumentPermission.All,
    ...PermissionList.PostPermission.All,
    ...PermissionList.ActivityPermission.All,
    ...PermissionList.CategoryPermission.All,
    ...PermissionList.RolePermission.All,
    ...PermissionList.UserPermission.All,
    ...PermissionList.NotificationPermission.All

}

const USER = {
    ...PermissionList.DocumentPermission.Upload,
    ...PermissionList.DocumentPermission.Download,
    ...PermissionList.AccountPermission.All,
    ...PermissionList.PostPermission.Comment,
    ...PermissionList.PostPermission.Save,
    ...PermissionList.PostPermission.Like,
    ...PermissionList.PostPermission.Create,
}

const COLLABORATOR = {
    ...PermissionList.AccountPermission.All,
    ...PermissionList.ContentManagementPermission.Management,
    ...PermissionList.DocumentPermission.Upload,
    ...PermissionList.DocumentPermission.Download,
    ...PermissionList.DocumentPermission.Approve,
    ...PermissionList.DocumentPermission.Preview,
    ...PermissionList.PostPermission.Comment,
    ...PermissionList.PostPermission.Save,
    ...PermissionList.PostPermission.Like,
    ...PermissionList.PostPermission.Create,
    ...PermissionList.DocumentPermission.Approve,
    ...PermissionList.DocumentPermission.Preview,
}

const getPermissionOfRoleByRoleName = function (roleName) {
    switch (roleName) {
        case "ADMIN":
            return ADMIN;
        case "COLLABORATOR":
            return COLLABORATOR;
        case "USER":
            return USER;
        default:
            return;

    }
}

export const {
    AccountPermission,
    DocumentPermission,
    ActivityPermission,
    NotificationPermission,
    RolePermission,
    CategoryPermission,
    PostPermission,
    UserPermission,
    ContentManagementPermission
} = PermissionList;
