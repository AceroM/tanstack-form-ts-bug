import {useAppForm} from "../../hooks/form.tsx";

export const PeoplePage = () => {
  const form = useAppForm({
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <h1>Personal Information</h1>
      <form.AppField
        name="fullName"
        children={(field) => <field.TextField label="Full Name"/>}
      />
      <form.AppField
        name="email"
        children={(field) => <field.TextField label="Email"/>}
      />
      <form.AppField
        name="phone"
        children={(field) => <field.TextField label="Phone"/>}
      />
      <h2>Emergency Contact</h2>
      <form.AppField
        name="emergencyContact.fullName"
        children={(field) => <field.TextField label="Full Name"/>}
      />
      <form.AppField
        name="emergencyContact.phone"
        children={(field) => <field.TextField label="Phone"/>}
      />
      <form.AppForm>
        <form.SubscribeButton label="Submit"/>
      </form.AppForm>
    </form>
  );
};
