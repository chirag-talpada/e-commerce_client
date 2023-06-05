import * as yup from "yup";

export const signUpShema = yup.object().shape({
  cpassword: yup
    .string()
    .test("compare", "password mismatch!", (value, testContext) => {

      if (testContext.parent.password === value) {
        return true;
      }
      return false;
    }),

    phone:yup.string().test('phone','must be valid number!',(phone)=>{
        if((isNaN(Number(phone)) || phone?.length!==10) && phone){
            return false
        }

        return true;
    })
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('must be required!'),

    password:yup.string().required('must be required!'),
});
