import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

//Styles
import styles from './Form.module.scss';
 
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nombre muy corto!')
    .max(50, 'Nombre muy largo!')
    .required('favor diligenciar el nombre!'),
  cell: Yup.string()
    .min(8, 'numero telefonico muy corto!')
    .max(12, 'numero telefonico muy largo!')
    .matches(/^[0-9]+$/, 'solo ingresar numeros!')
    .required('favor diligenciar el celular!'),
  email: Yup.string()
    .email('email invalido!')
    .required('favor diligenciar el e-mail!'),
  message: Yup.string()
    .min(10, 'mensaje muy corto!')
    .required('favor diligenciar el campo de mensaje!'),
  checkBox: Yup.boolean().oneOf([true], 'favor aceptar politicas de privacidad')
});

const INITIAL_FORM = {
  name: '',
  cell: '',
  email: '',
  message: '',
  checkBox: false
}

const ContactForm: React.FC  = () => {

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = values => {
    // same shape as initial values
    console.log(values);
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>CONTACTO</h1>
      <Formik
        initialValues={INITIAL_FORM}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.nameCell}>
              <div className={styles.field}>
                <Field name="name" 
                  placeholder={errors.name && touched.name ? errors.name : 'Nombre'} 
                  className={errors.name && touched.name && styles.error}
                />
                <div className={styles.errorMsg}>
                  {touched.name && errors.name}
                </div>
              </div>
              <div className={styles.field}>
                <Field name="cell" 
                  placeholder={errors.cell && touched.cell ? errors.cell : 'Celular'} 
                  className={errors.cell && touched.cell && styles.error}
                />
                <div className={styles.errorMsg}>
                  {touched.cell && errors.cell}
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <Field name="email" type="email" 
                placeholder={errors.email && touched.email ? errors.email : 'Email'} 
                className={errors.email && touched.email && styles.error}
              />
              <div className={styles.errorMsg}>
                {touched.email && errors.email}
              </div>
            </div>
            <div className={styles.field}>
              <Field name="message" type="textarea"
                placeholder={errors.message && touched.message ? errors.message : 'Mensaje'} 
                className={classnames(styles.message, errors.message && touched.message && styles.error)}
              />
              <div className={styles.errorMsg}>
                {touched.message && errors.message}
              </div>
            </div>
            <div>
              <div className={styles.checkbox}>
                <Field name="checkBox" type="checkbox" />
                <span>Acepte aqui el uso de sus datos personales</span>
              </div>
              <div className={styles.errorMsg}>
                {touched.checkBox && errors.checkBox}
              </div>
            </div>
            <button type="submit">ENVIAR</button>
          </Form>
        )}
      </Formik>
    </section>
  )
};

export default ContactForm;